<?php

namespace Symfony\ReactBundle\Controller;

use Symfony\ReactBundle\Entity\Task;
use FOS\RestBundle\Controller\FOSRestController;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class TaskController extends FOSRestController
{
    /**
     * @ParamConverter()
     * @ApiDoc()
     *
     * @param Task $task
     *
     * @return Task
     */
    // curl -X "GET" http://localhost:8000/api/tasks/2.json
    public function getTaskAction(Task $task)
    {
        return $task;
    }

    /**
     * @ApiDoc()
     * @return Task[]
     */
    //curl -X "GET"  http://localhost:8000/api/tasks.json
    public function getTasksAction()
    {
        return $this->getDoctrine()->getRepository('SymfonyReactBundle:Task')->findAll();
    }

    /**
     * @ApiDoc()
     *
     * @param Request $request
     *
     * @return Task
     */
    //curl -X "POST" -d "text=do\ something&user=john\ doe"  http://localhost:8000/api/tasks.json
    public function postTasksAction(Request $request)
    {
        $task = new Task();
        $task->setText($request->request->get('text'));
        $task->setUser($request->request->get('user'));

        $errors = $this->get('validator')->validate($task);
        if (count($errors) > 0) {
            $errorStrings = [];
            foreach ($errors as $error) {
                $errorStrings[] = $error->getMessage();
            }
            return $this->view(
                [
                    'error' => implode(',', $errorStrings)
                ],
                Response::HTTP_BAD_REQUEST
            );
        }

        $this->getDoctrine()->getManager()->persist($task);
        $this->getDoctrine()->getManager()->flush();

        return $task;
    }

    /**
     * @ApiDoc()
     *
     * @param Task $task
     *
     * @return Response
     */
    //curl -X "DELETE"  http://localhost:8000/api/tasks/3.json
    public function deleteTaskAction(Task $task)
    {
        $this->getDoctrine()->getManager()->remove($task);
        $this->getDoctrine()->getManager()->flush();

        return new Response('', Response::HTTP_NO_CONTENT);
    }
}

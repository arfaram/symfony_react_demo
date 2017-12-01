<?php

namespace Symfony\ReactBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {

	return $this->render('SymfonyReactBundle:app:index.html.twig');

        return new Response(
            'Home page 
		<ul>
			<li><a href="/react">react</a></li>
			<li><a href="/cologne">cologne</a></li>
		</ul>
	',Response::HTTP_OK
        );
    }

    /**
     * @Route("/react", name="react")
     */
    public function reactAction(Request $request)
    {

        return $this->render('SymfonyReactBundle:app:react.html.twig');

    }
}

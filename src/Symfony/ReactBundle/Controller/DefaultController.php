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

    }

    /**
     * @Route("/react", name="react")
     */
    public function reactAction(Request $request)
    {
        return $this->render('SymfonyReactBundle:app:react.html.twig');

    }
}

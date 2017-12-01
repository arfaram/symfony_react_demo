<?php

namespace Symfony\ReactBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class CologneController extends Controller
{
    /**
     * @Route("/cologne", name="cologne")
     */
    public function indexAction(Request $request)
    {
	 return $this->render('SymfonyReactBundle:app:cologne.html.twig');
    }


}

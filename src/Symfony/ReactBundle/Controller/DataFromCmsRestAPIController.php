<?php

namespace Symfony\ReactBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DataFromCmsRestAPIController extends Controller
{
    /**
     * @Route("/rest/api/{source}", name="cms_source")
     */
    public function blogAction(Request $request, string $source = 'blog')
    {
	 return $this->render("SymfonyReactBundle:app:$source.html.twig");
    }

}

<?php
/**
 * Created by PhpStorm.
 * User: yonel
 * Date: 10/20/2018
 * Time: 10:26 AM
 */

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ApiResource
 * @ORM\Entity
 */
class Ingredient
{
    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    public $id;
    /**
     * @var string $name  Name of the Ingredient
     *
     * @ORM\Column
     * @Assert\NotBlank
     */
    public $name;

    /**
     * @var string $name Enabled to show and use to build your pizza
     *
     * @ORM\Column(type="boolean")
     * @Assert\NotBlank
     */
    public $enable;

    /**
     * @var string $name Price to add to the pizza total
     *
     * @ORM\Column(type="float")
     * @Assert\NotBlank
     */
    public $price;

    /**
     * @var Order Available reviews for this book.
     *
     * @ORM\ManyToMany(targetEntity="Order", inversedBy="ingredients")
     * @ORM\JoinColumns(
     *     @ORM\JoinColumn(name="order_id", referencedColumnName="id")
     * )
     */
    public $order;
}
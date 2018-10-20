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
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *     normalizationContext={"groups"={"withClient"}},
 *     denormalizationContext={"groups"={"withClient"}},
 * )
 * @ORM\Entity
 * @ORM\Table(name="OrderTable")
 */
class Order
{
    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @Groups({"read", "write"})
     */
    public $id;

    /**
     * @var PizzaSize[] Available reviews for this book.
     *
     * @ORM\ManyToOne(targetEntity="PizzaSize", inversedBy="order")
     * @Groups({"withClient"})
     */
    public $size;

    /**
     * @var Ingredient[] Available reviews for this book.
     *
     * @ORM\ManyToMany(targetEntity="Ingredient", mappedBy="order")
     * @ORM\JoinColumns(
     *     @ORM\JoinColumn(name="ingredient_id", referencedColumnName="id")
     * )
     * @Groups({"withClient"})
     */
    public $ingredients;

    /**
     * @var float Total of the order
     *
     * @ORM\Column(type="float")
     *
     * @Groups({"withClient"})
     */
    public $total;

    /**
     * @var PizzaSize[] Available reviews for this book.
     *
     * @ORM\ManyToOne(targetEntity="Client", inversedBy="orders", cascade="persist")
     *
     * @Groups({"withClient"})
     */
    public $client;
}
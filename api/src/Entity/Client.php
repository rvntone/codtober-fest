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
 *
 *     )
 * @ORM\Entity
 */
class Client
{
    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @Groups({"withClient"})
     */
    public $id;
    /**
     * @var string $name client name
     *
     * @ORM\Column
     * @Assert\NotBlank
     * @Groups({"withClient"})
     */
    public $name;

    /**
     * @var string $name client's address to send pizza
     *
     * @ORM\Column()
     * @Assert\NotBlank
     * @Groups({"withClient"})
     */
    public $address;

    /**
     * @var string $name client's phone number
     *
     * @ORM\Column
     * @Assert\NotBlank
     * @Groups({"withClient"})
     */
    public $phoneNumber;

    /**
     * @var Ingredient[] Available reviews for this book.
     *
     * @ORM\OneToMany(targetEntity="Order", mappedBy="client")
     *
     */
    public $orders;
}
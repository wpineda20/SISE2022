<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class NotifyObservation extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    private $observation;
    private $name;
    public function __construct($observation,$name)
    {
        $this->observation=$observation;
        $this->name=$name;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {

        return $this->markdown('view.name')->subject("SISE - Seguimiento $this->name")->with(array(
            'name'=>$this->name,
            'observation'=>$this->observation
        ));
    }
}

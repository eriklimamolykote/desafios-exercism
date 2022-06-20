<?php

    /*
    * By adding type hints and enabling strict type checking, code can become
    * easier to read, self-documenting and reduce the number of potential bugs.
    * By default, type declarations are non-strict, which means they will attempt
    * to change the original type to match the type specified by the
    * type-declaration.
    *
    * In other words, if you pass a string to a function requiring a float,
    * it will attempt to convert the string value to a float.
    *
    * To enable strict mode, a single declare directive must be placed at the top
    * of the file.
    * This means that the strictness of typing is configured on a per-file basis.
    * This directive not only affects the type declarations of parameters, but also
    * a function's return type.
    *
    * For more info review the Concept on strict type checking in the PHP track
    * <link>.
    *
    * To disable strict typing, comment out the directive below.
    */

    declare(strict_types=1);

    class Robot
    {
        /**
         *
         * @var int[]
         */
        public $position;

        /**
         *
         * @var string
         */

        public $direction;
        public $allDirections = array( "north", "east", "south", "west" );
        public const DIRECTION_NORTH = "north";
        public const DIRECTION_EAST = "east";
        public const DIRECTION_SOUTH = "south";
        public const DIRECTION_WEST = "west";

        public function __construct(array $position, string $direction)
        {

            $this->position = $position;
            $this->direction = $direction;

        }

        public function turnRight(): self
        {

            $this->rotate( $this->direction, "right" );
            return $this;

        }

        public function turnLeft(): self
        {

            $this->rotate( $this->direction, "left" );
            return $this;

        }

        public function advance(): self
        {

            switch( $this->direction ) {

                case "north":
                    $this->position[ 1 ]++;
                    return $this;
                    break;
                case "east":
                    $this->position[ 0 ]++;
                    return $this;
                    break;
                case "south":
                    $this->position[ 1 ]--;
                    return $this;
                    break;
                case "west":
                    $this->position[ 0 ]--;
                    return $this;
                    break;

            }

        }

        public function rotate( string $direction, string $side ) {

            $pos = array_search( $direction, $this->allDirections );

            if ( $side === "left" ) {

                if ( $pos === 0 )
                    $this->direction = $this->allDirections[ 3 ];
                else
                    $this->direction = $this->allDirections[ $pos - 1 ];   

            }

            else if ( $side === "right" ) {

                if ( $pos === 3 ) 
                    $this->direction = $this->allDirections[ 0 ];
                else
                    $this->direction = $this->allDirections[ $pos + 1 ];    

            }

        }

        public function instructions( string $order ) {

            for ( $i = 0; $i < strlen( $order ); $i++ ) {

                switch( $order[ $i ] ) {

                    case "R":
                        $this->turnRight();
                        break;
                    case "L":
                        $this->turnLeft();
                        break;
                    case "A":
                        $this->advance();
                        break;
                    default:
                        throw new InvalidArgumentException();
                        break;  

                }

            }

        }

    }

?>
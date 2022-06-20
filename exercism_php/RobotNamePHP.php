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

    declare( strict_types=1 );

    class Robot
    {

        const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const NUM = '0123456789';
        public ?string $name = null;
        public static array $names = [];

        public function getName(): string
        {

            if ( $this->name === null ) {

                $this->name = $this->generate();
                $this->check();

            }

            return $this->name;
        
        }

        public function check() {

            while ( in_array( $this->name, self::$names ) ) {

                $this->name = $this->generate();

            }

            self::$names[] = $this->name;

        }

        public function reset(): void
        {

            $this->name = null;
        
        }

        public function generate(): string {

            for ( $i = 0; $i < 2; $i++ ) {

                $this->name .= self::ABC[ rand(0, strlen( self::ABC ) - 1 ) ];

            }

            for ( $i = 0; $i < 3; $i++ ) {

                $this->name .= self::NUM[ rand( 0, strlen( self::NUM ) - 1 ) ];

            }

            return $this->name;
            
        }

    }

?>
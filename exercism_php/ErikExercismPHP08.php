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

    define( "LOWERCASE_A", 97 );

    class SimpleCipher
    {

        public $key;

        public function __construct( string $key = null )
        {
  
            $this -> key = $key;

            if ( $this -> key === null ) {

                $this -> key = '';

                foreach ( range( 1,100 ) as $i ) {

                    $this -> key .= chr( LOWERCASE_A + rand( 0, 25 ) );

                }

            }

            else if ( !preg_match( '/[[:lower:]]/', $this -> key ) ) {

                throw new InvalidArgumentException();

            }
        
        }

        private static function make_chr( int $i ): string {

            if ( $i > 25 ) { $i -= 26; }
            elseif ( $i < 0 ) { $i += 26; }

            return chr( $i + LOWERCASE_A );

        }

        private function apply_operation( string $text, callable $operation ): string {

            $vals = array_map(

                function ( string $val, int $off ) use ( $operation ) : string {

                    return self::make_chr(

                        $operation(

                            ( ord( $val ) - LOWERCASE_A ),
                            ( ord( $this -> key[ $off ] ) - LOWERCASE_A )

                        )

                    );

                },

                str_split( $text ),
                range( 0, strlen( $text ) - 1 )

            );

            return implode( $vals );

        }

        public function encode( string $plainText ): string {

            return $this -> apply_operation( $plainText, fn( int $a, int $b ) => $a + $b );

        }

        public function decode( string $cipherText ): string {

            return $this -> apply_operation( $cipherText, fn( int $a, int $b ) => $a - $b );

        }

    }

?>
Assignment 5

1. Variables: declared in _config.scss file, for color and image path. These variables are used throughout the scss files. implemented in _config.scss, style.scss, _button.scss, _mobile.scss

    e.g. 
    $font-stack: Arial, Helvetica, sans-serif;
    $font-text: Sofia, Tangerine, Arial;
    $dark-color:rgb(48, 23, 5);
    $primary-color: white;
    $secondary-color: rgb(162, 137, 87);
    $back-image: '/Images/background.jpg';
    $selector: a;

2. Custom Properties:


3. Nesting: used in style.scss.

    e.g. header{
        nav{
            img{

            }
        }
    } 

4. Interpolation: anchor tag is declared as selector :  <$selector: a;>
    #{$selector} is used throughout the scss files instaed of <a>.

    file: style.scss, 

 5. Placeholder Selectors: general button attributes are declared in %btn file: _button.scss
    extended this into .btn-search class to inherit these attributes.

    .btn-search{
        @extend %btn;
        @include set-buttonColor($dark-color);
        height:50px;
        width: 150px; 
        //color: $dark-color;
        font-size: 20px;
        font-family: $font-text;
        font-style: bold;
        //background: transparent;

    }

6. Mixins: declared in _config.scss file, to set font-color and background color.

    @mixin set-buttonColor($color) {
        color: $color;
        background-color: set-background-color($color);
    }

    used in _button.scss for setting button font color and background color.

    @include set-buttonColor($dark-color);


7. Functions: declared in _config.scss file, to set color to some specific color or make it transparent.

    @function set-background-color($color) 

    the fuction is called inside mixin to set background.

    background-color: set-background-color($color);


8. mini language: & in place of parent selector.
    e.g. &:hover {}

    sass color. scale(0.98);
    lighten($dark-color, 10%);
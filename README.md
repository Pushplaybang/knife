knife
=====
Nail vertical rythm, modular scale, and REMs like a boss with this simple set of SASS/SCSS variables, functions and mixins.  

**NB: in beta, will finish testing the first version of this in the next day or so.**

## Features
* Simple to master and Use
* Responsive friendly 
* Based on REM's including Conveniennt REM functions / Mixins
* Optional **IE Support**
* Designed to be compatible with [Grid Lover](http://www.gridlover.net/)
* Solves sub pixel rounding errors in different browsers by rounding out your base nubers.

### Project Goals
* Make good typography EASY(er) to achieve
* Keep 'Knife' simple to use and understand
* Create a typographic equivelant to the awesome Susy



## Install

Of course, first make sure you have [SASS](http://sass-lang.com/) instaled.

Download and simply include the knife.sass file in your sass directory and place the following at the top of your main sass / scss stylesheet.

		@import 'knife';

**NB :** Bower Install coming soon.


## Usage
Note that this tool is heavily inspired by the fantatstic web tool [Grid Lover](http://www.gridlover.net/) and its absolutely one of the eaiest ways to sort out these initial variables.  

Set your **basic variables**

		// Basic Type Variabless
		$body-font-size: 	16px;
		$body-line-height: 	1.5;
		$scale-factor: 		1.333;
		$ie8compatability:  true;



Set Your base font size on the **html ans body**

		html { @include khtml(); }
		body { @include kbody(); }

This can be done in your base or normalization files, or later on before you define youe type.  You should be defining your typography straight after your normalize / reset.

Set up your Typography

		h1,h2,h3,h4,h5,h6 {text-transform: uppercase;}
		h1 { @include ktype(5, 1, 1); }
		h2 { @include ktype(4, 1, 1); }
		h3 { @include ktype(3, 1, 1); }
		h4 { @include ktype(2, 1, 1); }
		h5 { @include ktype(1, 1, 0); }
		h6 { 
			@include ktype(0, 1, 0);
			font-weight: normal;
			text-transform: capitalize;
		}
		p, ul, ol {@include ktype(0,0,1);}
		small { @include ktype(-1,0,1); }

Use the `krem()` mixin to set **any** other value in rems, because no one really spends their life thinking in relative units of measure.

		@include krem("height", 160px);

# About

Coming Soon.

### Acknowledgements & Inspiration
heavily inspired by the awesome web app [Grid Lover](http://www.gridlover.net/) and [sevenupcan's sass gridlover mixin](https://github.com/sevenupcan/gridlover-mixin). I've been further pushed to develop this little SASS tool to help "onboard" team members with typographic layout principals, using REM units, speeding up starting dev time on projects and make something without a steep learning curve.  **I hope you find it useful too**.


#### About Web Typography

* [More Meaningful Typography](http://alistapart.com/article/more-meaningful-typography)
* [Setting Typeon the Web to Baseline Grid](http://alistapart.com/article/settingtypeontheweb)
* [Composing the New Canon: Music, Harmony, Proportion](http://24ways.org/2011/composing-the-new-canon/)
* [Relational Design](http://blog.8thlight.com/billy-whited/2011/10/28/r-a-ela-tional-design.html#tips)


#### Tools for Better Type

* [Grid Lover](http://www.gridlover.net/)
* [Modular Scale](http://modularscale.com/)

## TODO : 
* Finish resolve mixin
* add space and padd mixins
* Add sache
* Add bower
* finish push, pull, suffix and prefix
* add 'offset' to accomodate border etc. 
* handle unitless values
* handle multiple values for padding / margin etc
* Create awesome examples
* Finish Wiki
* Make Awesome Landing Page

## License
[MIT Licensed](https://github.com/Pushplaybang/knife/blob/master/LICENSE) , Paul van Zyl 2014

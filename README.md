knife
=====
Nail vertical rhythm, modular scale, and REMs like a boss with this simple set of SASS/SCSS variables, functions and mixins.  

**NB: early release, expect this to change, I'll do my best not to break stuff, and let you know if something will break in the future..**

## Features
* Simple to master and Use
* Responsive friendly 
* Work / think in px - **win in REMs**
* Optional **IE Support**
* Designed to be compatible with [Grid Lover](http://www.gridlover.net/)
* Solves sub pixel rounding errors in different browsers by rounding out your base numbers.

### Project Goals
* Make good typography EASY(er) to achieve
* Keep 'Knife' simple to use and understand
* Create a typographic equivelant to the awesome Susy


## Install

Of course, first make sure you have [SASS](http://sass-lang.com/) installed.

then install with bower : 

```bash
$ bower install knife
```

or : Download and simply include the knife.sass file in your sass directory and place the following at the top of your main sass / scss stylesheet to import it.
```scss
@import 'knife';
```




## Usage
Note that this tool is heavily inspired by the fantatstic web app [Grid Lover](http://www.gridlover.net/) and its absolutely one of the eaiest ways to sort out these initial variables.  

Set your **basic variables**

```scss
// Basic Type Variabless
$body-font-size: 	16px;
$body-line-height: 	1.5;
$scale-factor: 		1.333;
$ie8compatability:  true;
```


Set Your base font size on the **html ans body**

```scss
html { @include khtml(); }
body { @include kbody(); }
```

This can be done in your base or normalization files, or later on before you define youe type.  You should be defining your typography straight after your normalize / reset.

Set up your Typography

```scss
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
```

Use the `krem()` mixin to set **any** other value in rems, because no one really spends their life thinking in relative units of measure.

```scss
@include krem("height", 160px);
```
### Output :

note the bloat added by the IE compatability, obviously setting that to false will result in halving the output.  Have a look at the basic demo in the example folder for more information.

```css
/* Type Setup */
html {
  font-size: 16px;
  line-height: 24px; }

body {
  font-size: 16px;
  line-height: 24px;
  font-size: 1rem;
  line-height: 1.5rem; }

/* Typography */
h1, h2, h3, h4, h5, h6 {
  text-transform: uppercase; }

h1 {
  font-size: 68px;
  font-size: 4.25rem;
  line-height: 72px;
  line-height: 4.5rem;
  margin-top: 48px;
  margin-top: 3rem;
  margin-bottom: 24px;
  margin-bottom: 1.5rem; }

h2 {
  font-size: 51px;
  font-size: 3.1875rem;
  line-height: 72px;
  line-height: 4.5rem;
  margin-top: 24px;
  margin-top: 1.5rem;
  margin-bottom: 24px;
  margin-bottom: 1.5rem; }

h3 {
  font-size: 38px;
  font-size: 2.375rem;
  line-height: 48px;
  line-height: 3rem;
  margin-top: 24px;
  margin-top: 1.5rem;
  margin-bottom: 24px;
  margin-bottom: 1.5rem; }

h4 {
  font-size: 29px;
  font-size: 1.8125rem;
  line-height: 48px;
  line-height: 3rem;
  margin-top: 24px;
  margin-top: 1.5rem;
  margin-bottom: 24px;
  margin-bottom: 1.5rem; }

h5 {
  font-size: 22px;
  font-size: 1.375rem;
  line-height: 24px;
  line-height: 1.5rem;
  margin-top: 24px;
  margin-top: 1.5rem;
  margin-bottom: 0px;
  margin-bottom: 0rem; }

h6 {
  font-size: 16px;
  font-size: 1rem;
  line-height: 24px;
  line-height: 1.5rem;
  margin-top: 24px;
  margin-top: 1.5rem;
  margin-bottom: 0px;
  margin-bottom: 0rem;
  text-transform: capitalize; }

p, ul, ol, dl {
  font-size: 16px;
  font-size: 1rem;
  line-height: 24px;
  line-height: 1.5rem;
  margin-top: 0px;
  margin-top: 0rem;
  margin-bottom: 24px;
  margin-bottom: 1.5rem; }

small {
  display: inline-block;
  font-size: 13px;
  font-size: 0.8125rem;
  line-height: 24px;
  line-height: 1.5rem;
  margin-top: 0px;
  margin-top: 0rem;
  margin-bottom: 0px;
  margin-bottom: 0rem; }

```


# About

Coming Soon.

### Acknowledgements & Inspiration
heavily inspired by the awesome web app [Grid Lover](http://www.gridlover.net/) and [sevenupcan's sass gridlover mixin](https://github.com/sevenupcan/gridlover-mixin). I've been further pushed to develop this little SASS tool to help "onboard" team members with typographic layout principals, using REM units, speeding up starting dev time on projects and make something without a steep learning curve.  **I hope you find it useful too**.


#### About Web Typography

* [More Meaningful Typography](http://alistapart.com/article/more-meaningful-typography)
* [Setting Typeon the Web to Baseline Grid](http://alistapart.com/article/settingtypeontheweb)
* [Composing the New Canon: Music, Harmony, Proportion](http://24ways.org/2011/composing-the-new-canon/)
* [Relational Design](http://blog.8thlight.com/billy-whited/2011/10/28/r-a-ela-tional-design.html#tips)
* [Aligning type to baseline the right way using SASS](https://medium.com/@razvanonofrei/aligning-type-to-baseline-the-right-way-using-sass-e258fce47a9b)


#### Tools for Better Type

* [Grid Lover](http://www.gridlover.net/)
* [Modular Scale](http://modularscale.com/)

## TODO : 
* Implement tests 
* Start thinking about a much stronger API for v1.0
* Consider SASS Maps for handling properties  better
* Handle old global variable warning nonsense
* finish type template mixin
* handle unitless values
* handle multiple values for padding / margin etc
* Test, Test and test again.
* Finish Wiki
* Create awesome examples
* ~~Finish killer logo~~  created by the awesome designer Sol Witcher
* Make sick as f@!% Landing Page
* ~~Finish resolve mixin~~
* ~~add reduce to kbody~~
* ~~add reduce to khtnl~~
* ~~Add sache~~
* ~~Add bower support~~
* ~~finish push, pull~~ 
* ~~suffix and prefix~~
* ~~start type template mixin~~
* ~~add 'offset' to accomodate border etc.~~
* ~~Add basic Example~~
* ~~add basic github page~~

## License
[MIT Licensed](https://github.com/Pushplaybang/knife/blob/master/LICENSE) , Paul van Zyl 2014


## Contributors

Please Feel free to make pull requests or suggest features, this project is super new and still growing into itself, I generally create feat/something branches for specific features, but will create a seperate development branch for contributors to make pull requests against.



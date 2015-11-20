# An Angularjs module with full feature of sweetalert libarary.

It's a directive and a provider to use sweetalert in js code and in html.

**these mudole use:**

SweetAlert AngularJS wrapper that is [https://github.com/oitozero/ngSweetAlert](here) develop by: [https://github.com/oitozero](oitozero)


and

ng-sweet-alert an angularjs directive that is [https://github.com/tushariscoolster/ng-sweet-alert](here) develop by: [https://github.com/tushariscoolster](tushariscoolster)


tnx for all.

if you need just a directive to use in html or need just fire sweetalret from your js code you can use one of tushariscoolster sn-sweet-alert directive or oitozero ngSweetAlert wrapper 
**but when need both of them (like me) use ngSweetAlertFull**.

Sweet Alert is a beautiful replacement for Javascript's "Alert". 

## Demo
[https://github.com/Mehrdad-Dadkhah/ngSweetAlert/demo](DEMO)

or:

[http://oitozero.github.io/ngSweetAlert/](ngSweetAlert DEMO)

and

[http://tushariscoolster.github.io/ng-sweet-alert/](ng-sweet-alert DEMO)


## Dependencies
- required:  
	[AngularJS](https://github.com/angular/angular)  
	[sweetalert](https://github.com/t4t5/sweetalert)

## Install
1. download the files
	1. Bower
		1. add `"ngSweetAlertFull": "latest"` to your `bower.json` file then run `bower install` OR run `bower install ngSweetAlertFull`
2. include the files in your app
	1. `SweetAlert.js`
	2. `ngSweetAlertFull.js` OR `sweet-alert.min.js`
	3. `sweet-alert.css`
	4. `jquery.min.js` when need to use directive (when use sweet-alert in html)
	```html
	<link rel="stylesheet" type="text/css" href="../lib/sweet-alert.css">

	<script src="../lib/jquery.min.js" type="text/javascript"></script>
	<script src="../lib/SweetAlert.js" type="text/javascript"></script>
	<script src="../lib/angular.min.js" type="text/javascript"></script>
	<script src="../src/ngSweetAlertFull.js" type="text/javascript"></script>
	<script src="./app.js" type="text/javascript"></script>
	```
3. include the module in angular (i.e. in `app.js`) - `ngSweetAlertFull`
	```javascript
	angular.module("testApp", ['ngSweetAlertFull']);
	```

## Examples
use in js:
```javascript
SweetAlert.swal({   
    title: "Are you sure?",   
    text: "Your will not be able to recover this imaginary file!",   
    type: "warning",   
    showCancelButton: true,   
    confirmButtonColor: "#DD6B55",   
    confirmButtonText: "Yes, delete it!",
    closeOnConfirm: false
},  function(){  
    SweetAlert.swal("Booyah!");
});
```

or use in html:
```html
<a class="btn" style="background-color:blue" sweet-on-confirm="checkConfirm()" sweet-on-cancel="checkCancel()" name="login-submit" sweet-cancel-option="{{sweet.cancel}}" sweet-confirm-option="{{sweet.confirm}}" sweet-options="{{sweet.option}}" sweet-alert-tag >Try It</a>
```


## Documentation

you can see [https://github.com/Mehrdad-Dadkhah/ngSweetAlertFull/demo/index.html](**demo file**)

or

- in js doc: [http://oitozero.github.io/ngSweetAlert/](http://oitozero.github.io/ngSweetAlert/)
- directive doc: [http://tushariscoolster.github.io/ng-sweet-alert/](http://tushariscoolster.github.io/ng-sweet-alert/)

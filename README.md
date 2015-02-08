##PyDictionary Javascript Plugin

This is the Client side Javascript Plugin for the PyDictionary Python Module's Web API. The Module uses AJAX to retrieve data from the Web API.

###Usage

Usage is easy. First you need to insert the `pydictionary.js` into your HTML page like this:

```html
<script src='http://geekpradd.github.io/PyDictionary/js/pydictionary.min.js'></script>
```

Now you can use the Plugin by creating a PyDictionary Object.

```javascript

var dictionary = new PyDictionary();
var meaning = dictionary.meaning('craving'); //Returns a Javascript Object
var synonym = dictionary.synonym('satire'); //Returns a Javascript Array
var antonym = dictionary.antonym('anxious'); //Returns an Array
var translation = dictionary.translate('School', 'es'); //Returns a String
```

##About

This Plugin allows the Browser to get Dictionary features by connecting to the PyDictionary Web API. The Web API is hosted by Red Hat on OpenShift. 

PyDictionary for Python created by Pradipta. Web API and Javascript Plugin created by Pradipta as well.	
this["ui"] = this["ui"] || {};
this["ui"]["component"] = this["ui"]["component"] || {};
this["ui"]["component"]["template"] = this["ui"]["component"]["template"] || {};

this["ui"]["component"]["template"]["button"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "disabled";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper))) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<button "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.disabled : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" type=\""
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias3(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\" onclick=\""
    + alias3(((helper = (helper = helpers.action || (depth0 != null ? depth0.action : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"action","hash":{},"data":data}) : helper)))
    + "\">"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.content : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</button>\n";
},"useData":true});

this["ui"]["component"]["template"]["card"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.thumbnail : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.copy : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return "\n    <img src=\""
    + ((stack1 = this.invokePartial(partials.theThumbnail,depth0,{"name":"theThumbnail","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "\" alt=\"profile picture\" class=\"card__thumbnail\" id=\"foto\"> ";
},"4":function(depth0,helpers,partials,data) {
    var stack1;

  return "\n    <h3 class=\"card__person\" id=\"naam\">"
    + ((stack1 = this.invokePartial(partials.theTitle,depth0,{"name":"theTitle","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</h3> ";
},"6":function(depth0,helpers,partials,data) {
    var stack1;

  return "\n    <p class=\"\">"
    + ((stack1 = this.invokePartial(partials.theCopy,depth0,{"name":"theCopy","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</p>\n    ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression, buffer = 
  "<div class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n    ";
  stack1 = ((helper = (helper = helpers.properties || (depth0 != null ? depth0.properties : depth0)) != null ? helper : alias1),(options={"name":"properties","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.properties) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n</div>\n";
},"usePartial":true,"useData":true});

this["ui"]["component"]["template"]["dropdown"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.pDropdownOptions,depth0,{"name":"pDropdownOptions","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"nav\">\n<ul>\n<li class=\"dropdown "
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">\n"
    + alias3(((helper = (helper = helpers.item || (depth0 != null ? depth0.item : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"item","hash":{},"data":data}) : helper)))
    + "\n	<ul class=\"nav drop-nav\">\n		"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.options : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n	</ul>\n</li>\n</ul>\n</div>";
},"usePartial":true,"useData":true});

this["ui"]["component"]["template"]["header"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "    <img src=\""
    + this.escapeExpression(((helper = (helper = helpers.logo || (depth0 != null ? depth0.logo : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"logo","hash":{},"data":data}) : helper)))
    + "\" class=\"pull-left\" alt=\"blabla\"> ";
},"3":function(depth0,helpers,partials,data) {
    var stack1;

  return " <div class=\"col-xs-6 col-md-8\"> "
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0['text-input'] : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " </div> ";
},"4":function(depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = this.invokePartial(partials.partialTextInput,depth0,{"name":"partialTextInput","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + " ";
},"6":function(depth0,helpers,partials,data) {
    var stack1;

  return "\n    <div class=\"col-xs-6 col-md-4\">\n        <ul class=\"nav nav--horizontal\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.properties : depth0),{"name":"each","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </ul>\n    </div>\n";
},"7":function(depth0,helpers,partials,data) {
    var stack1;

  return "            <li>"
    + ((stack1 = this.invokePartial(partials.link,depth0,{"name":"link","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"row "
    + this.escapeExpression(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.logo : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " \n    "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0['text-input'] : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.nav : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        \n  \n      \n</div>\n";
},"usePartial":true,"useData":true});

this["ui"]["component"]["template"]["navBar"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <li>"
    + ((stack1 = this.invokePartial(partials.link,depth0,{"name":"link","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</li>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.barButton,depth0,{"name":"barButton","data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\""
    + this.escapeExpression(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">\n   <ul class=\"nav nav--horizontal\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.properties : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.button : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n</div>\n";
},"usePartial":true,"useData":true});

this["ui"]["component"]["template"]["nav"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "		<li>"
    + ((stack1 = this.invokePartial(partials.link,depth0,{"name":"link","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.properties : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true});

this["ui"]["component"]["template"]["sharePost"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0['text-input'] : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = this.invokePartial(partials.partialTextInput,depth0,{"name":"partialTextInput","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + " ";
},"4":function(depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.button : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"5":function(depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = this.invokePartial(partials.partialButton,depth0,{"name":"partialButton","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + " ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "		<div class=\"row "
    + this.escapeExpression(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">	\n			<div class=\"col-xs-12\">\n				"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.input : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n			</div>\n			<div class=\"col-xs-12\">\n			<p></p>\n				"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.button : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n			</div>\n		</div>\n	\n";
},"usePartial":true,"useData":true});

this["ui"]["component"]["template"]["textArea"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "class=\"text-input__grey\"";
},"3":function(depth0,helpers,partials,data) {
    return "required";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"text-area "
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\"><textarea "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.background : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " name=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" type=\"text\" placeholder=\""
    + alias3(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"placeholder","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias3(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\"></textarea></div>\n	  \n\n";
},"useData":true});

this["ui"]["component"]["template"]["textInput"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "	<div class=\"mytest\">\n      <input class=\"inputMaterial\" type=\"text\" required>\n      <span class=\"bar\"></span>\n      <label>"
    + this.escapeExpression(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "</label>\n   </div>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "   <div class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\"><input "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.background : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " name=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" type=\"text\" placeholder=\""
    + alias3(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"placeholder","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias3(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\"></div>\n";
},"4":function(depth0,helpers,partials,data) {
    return "class=\"text-input__grey\"";
},"6":function(depth0,helpers,partials,data) {
    return "required";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.label : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});
this["ui"] = this["ui"] || {};
this["ui"]["component"] = this["ui"]["component"] || {};
this["ui"]["component"]["template"] = this["ui"]["component"]["template"] || {};

this["ui"]["component"]["template"]["alert"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return " <span class=\"alert-icon\"> <i class=\"icon "
    + this.escapeExpression(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"icon","hash":{},"data":data}) : helper)))
    + "\"></i></span>";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return "<span class=\"title\"><b> "
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + " </b></span>";
},"5":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<span class=\"message\"> "
    + this.escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"message","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.link : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</span>";
},"6":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function";

  return " <a href=\""
    + ((stack1 = ((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"href","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\">"
    + this.escapeExpression(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"link","hash":{},"data":data}) : helper)))
    + "</a> ";
},"8":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.button : depth0),{"name":"each","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"9":function(depth0,helpers,partials,data) {
    var stack1;

  return " <span class=\"alert-button\">"
    + ((stack1 = this.invokePartial(partials.PartialButton,depth0,{"name":"PartialButton","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</span>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"alert "
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.icon : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.message : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.button : depth0),{"name":"if","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true});

this["ui"]["component"]["template"]["appbar"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "        <li>"
    + ((stack1 = this.invokePartial(partials.PartialNavItem,depth0,{"name":"PartialNavItem","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</li>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.PartialButton,depth0,{"name":"PartialButton","data":data,"indent":"        ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"app-bar "
    + this.escapeExpression(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">\n<div class=\"innerContainer\">\n   <div class=\"nav nav--horizontal\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.navItems : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.button : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n    </div>\n</div>\n</div>\n";
},"usePartial":true,"useData":true});

this["ui"]["component"]["template"]["appblock"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = this.invokePartial(partials.PartialButton,depth0,{"name":"PartialButton","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + " ";
},"3":function(depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = this.invokePartial(partials.PartialAvatar,depth0,{"name":"PartialAvatar","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + " ";
},"5":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return " <p>"
    + ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " </p>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"row "
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"col-xs-12\">\n    <div class=\"app-block\">\n    	"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.appBlockButter : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n    	"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.appBlockAvatar : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n    	"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.appBlockContent : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n    	"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.appBlockButton : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n    </div>\n    </div>\n</div>";
},"usePartial":true,"useData":true});

this["ui"]["component"]["template"]["avatar"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, options;

  stack1 = ((helper = (helper = helpers.avatar || (depth0 != null ? depth0.avatar : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"avatar","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.avatar) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { return stack1; }
  else { return ''; }
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"avatar "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.small : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.round : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\"><img "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.src : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + " alt=\"avatar\"></div>";
},"3":function(depth0,helpers,partials,data) {
    return " avatar--small";
},"5":function(depth0,helpers,partials,data) {
    return " round";
},"7":function(depth0,helpers,partials,data) {
    var helper;

  return "src=\""
    + this.escapeExpression(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"src","hash":{},"data":data}) : helper)))
    + "\" ";
},"9":function(depth0,helpers,partials,data) {
    return "src=\"https://www.filepicker.io/api/file/Xr1rtfRBRd6HVNVynfMu\"";
},"11":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"avatar "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.small : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\"><img src=\"https://www.filepicker.io/api/file/Xr1rtfRBRd6HVNVynfMu\" alt=\"avatar\"/></div>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.avatar : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(11, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});

this["ui"]["component"]["template"]["button"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"row\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.buttons : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"2":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"col-xs-9 col-sm-6 col-md-4\"><div class=\"app-block app-block--buttons\">"
    + ((stack1 = this.invokePartial(partials.PartialButton,depth0,{"name":"PartialButton","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "<pre class=\"language-css\"><code class=\"language-css\">"
    + this.escapeExpression(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "</code></pre></div></div>";
},"4":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<button "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.disabled : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
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
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.iconOnly : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.program(10, data, 0),"data":data})) != null ? stack1 : "")
    + "</button>";
},"5":function(depth0,helpers,partials,data) {
    return "disabled";
},"7":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.icon : depth0),{"name":"if","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"8":function(depth0,helpers,partials,data) {
    var helper;

  return "<i class=\"icon "
    + this.escapeExpression(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"icon","hash":{},"data":data}) : helper)))
    + "\"></i>";
},"10":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.icon : depth0),{"name":"if","hash":{},"fn":this.program(11, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.content : depth0),{"name":"if","hash":{},"fn":this.program(13, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"11":function(depth0,helpers,partials,data) {
    var helper;

  return "<i class=\"icon "
    + this.escapeExpression(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"icon","hash":{},"data":data}) : helper)))
    + "\"></i> ";
},"13":function(depth0,helpers,partials,data) {
    var helper;

  return this.escapeExpression(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)));
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.styleguide : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "\n";
},"usePartial":true,"useData":true});

this["ui"]["component"]["template"]["composer"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = this.invokePartial(partials.PartialTextInput,depth0,{"name":"PartialTextInput","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + " ";
},"3":function(depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.buttons : depth0),{"name":"each","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"4":function(depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = this.invokePartial(partials.PartialButton,depth0,{"name":"PartialButton","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + " ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "\n			<div class=\"app-block composer\">\n			<div class=\"col-xs-12\">\n				 ";
  stack1 = ((helper = (helper = helpers.input || (depth0 != null ? depth0.input : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"input","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.input) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n			</div>\n			<div class=\"col-xs-12\">\n			<p></p>\n				"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.buttons : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n			</div>\n			</div>	\n\n	\n";
},"usePartial":true,"useData":true});

this["ui"]["component"]["template"]["dialog"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "dialog--angry ";
},"3":function(depth0,helpers,partials,data) {
    return "dialog--strict ";
},"5":function(depth0,helpers,partials,data) {
    return "icon-solid-fire ";
},"7":function(depth0,helpers,partials,data) {
    return "icon-solid-flag";
},"9":function(depth0,helpers,partials,data) {
    var helper;

  return "<span class=\"title\"><b> "
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + " </b></span>";
},"11":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<span class=\"message\"> "
    + this.escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"message","hash":{},"data":data}) : helper)))
    + " "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.link : depth0),{"name":"if","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</span>";
},"12":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function";

  return " <a href=\""
    + ((stack1 = ((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"href","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\">"
    + this.escapeExpression(((helper = (helper = helpers.link || (depth0 != null ? depth0.link : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"link","hash":{},"data":data}) : helper)))
    + "</a> ";
},"14":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.button : depth0),{"name":"each","hash":{},"fn":this.program(15, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"15":function(depth0,helpers,partials,data) {
    var stack1;

  return "<span class=\"dialog-button pull-right\">"
    + ((stack1 = this.invokePartial(partials.PartialButton,depth0,{"name":"PartialButton","hash":{"class":"naked-button--strict"},"data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</span>";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"dialog "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.angry : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "\" id=\""
    + this.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n	<div class=\"row\"> \n		<div class=\"col-xs-3\">\n			<span class=\"dialog-icon\"> <i class=\"icon "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.angry : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "\"></i></span>\n		</div>\n		<div class=\"col-xs-9\">\n			<div class=\"dialog-title\">\n				"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n			</div>\n			<div class=\"dialog-message\">\n				"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.message : depth0),{"name":"if","hash":{},"fn":this.program(11, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n			</div>\n		</div>\n	<div class=\"row\">\n		<div class=\"col-xs-12\">\n			<div class=\"dialog-actions\">\n				"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.button : depth0),{"name":"if","hash":{},"fn":this.program(14, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n			</div>\n		</div>\n	</div>\n</div>";
},"usePartial":true,"useData":true});

this["ui"]["component"]["template"]["dropdown"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "<i class=\""
    + this.escapeExpression(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"icon","hash":{},"data":data}) : helper)))
    + "\"></i>";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "			<li>\n				<a id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\" href=\""
    + alias3(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"href","hash":{},"data":data}) : helper)))
    + "\">\n					"
    + alias3(((helper = (helper = helpers.option || (depth0 != null ? depth0.option : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"option","hash":{},"data":data}) : helper)))
    + "\n				</a>\n			</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function";

  return "<li class=\"dropdown\" id=\"dropdown\">\n	"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.icon : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " \n	"
    + ((stack1 = ((helper = (helper = helpers.dropdownItem || (depth0 != null ? depth0.dropdownItem : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"dropdownItem","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + " \n	<ul class=\"nav drop-nav\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.dropdownOptions : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</ul>\n<script>"
    + this.escapeExpression(((helper = (helper = helpers.script || (depth0 != null ? depth0.script : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"script","hash":{},"data":data}) : helper)))
    + "</script>\n</li>";
},"useData":true});

this["ui"]["component"]["template"]["eventpostit"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function";

  return "							<div class=\"postit-avatar\">\n"
    + ((stack1 = this.invokePartial(partials.PartialAvatar,depth0,{"name":"PartialAvatar","data":data,"indent":"\t\t\t\t\t\t\t\t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "							</div>\n							<div class=\"postit-author\">"
    + this.escapeExpression(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"author","hash":{},"data":data}) : helper)))
    + "</div>\n							<div class=\"postit-timestamp\">Event created on "
    + ((stack1 = ((helper = (helper = helpers.timestamp || (depth0 != null ? depth0.timestamp : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"timestamp","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "							<a href=\""
    + this.escapeExpression(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"href","hash":{},"data":data}) : helper)))
    + "\">"
    + ((stack1 = this.invokePartial(partials.PartialCoverImage,depth0,{"name":"PartialCoverImage","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</a>\n";
},"5":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = "";

  stack1 = ((helper = (helper = helpers.eventpostitContent || (depth0 != null ? depth0.eventpostitContent : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"eventpostitContent","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.eventpostitContent) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"6":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "								<a class=\"event-post-it__title\" href=\""
    + alias3(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"href","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.eventTitle || (depth0 != null ? depth0.eventTitle : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"eventTitle","hash":{},"data":data}) : helper)))
    + "</a>\n								<p><span class=\"event-post-it--bold\">Where&#58;</span> "
    + alias3(((helper = (helper = helpers.eventLocation || (depth0 != null ? depth0.eventLocation : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"eventLocation","hash":{},"data":data}) : helper)))
    + "</p>\n								<p><span class=\"event-post-it--bold\">When&#58;</span> "
    + alias3(((helper = (helper = helpers.eventDate || (depth0 != null ? depth0.eventDate : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"eventDate","hash":{},"data":data}) : helper)))
    + "</p>		\n";
},"8":function(depth0,helpers,partials,data) {
    return "							<p>...</p>\n";
},"10":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.PartialButton,depth0,{"name":"PartialButton","data":data,"indent":"\t\t\t\t\t\t\t","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"12":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = "";

  stack1 = ((helper = (helper = helpers.eventpostitLikes || (depth0 != null ? depth0.eventpostitLikes : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"eventpostitLikes","hash":{},"fn":this.program(13, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.eventpostitLikes) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"13":function(depth0,helpers,partials,data) {
    var helper;

  return "							<a class=\"naked-button--strict hover pull-right\">"
    + this.escapeExpression(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"number","hash":{},"data":data}) : helper)))
    + " people like this</a>					\n";
},"15":function(depth0,helpers,partials,data) {
    var stack1;

  return "		<div class=\"post-it__comments\">\n			<div class=\"app-block--no-bg event-post-it\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.comments : depth0),{"name":"each","hash":{},"fn":this.program(16, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n";
},"16":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "					<div class=\"row\">\n						<div class=\"col-xs-12\">\n							<div class=\"comment-author-avatar\">"
    + ((stack1 = this.invokePartial(partials.PartialAvatar,depth0,{"name":"PartialAvatar","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>\n							<div class=\"comment--meta\"><span class=\"comment-author\">"
    + alias3(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"author","hash":{},"data":data}) : helper)))
    + " </span> <span class=\"comment-timestamp\"> "
    + alias3(((helper = (helper = helpers.timestamp || (depth0 != null ? depth0.timestamp : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"timestamp","hash":{},"data":data}) : helper)))
    + "</span></div>\n							<div class=\"comment-content\"><p>"
    + ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p></div>\n						</div>\n					</div>\n";
},"18":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "			<div class=\"app-block--no-bg event-post-it-input\">\n";
  stack1 = ((helper = (helper = helpers.commentInputField || (depth0 != null ? depth0.commentInputField : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"commentInputField","hash":{},"fn":this.program(19, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.commentInputField) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "			</div>\n		</div>\n";
},"19":function(depth0,helpers,partials,data) {
    var stack1;

  return "					<div class=\"row\">\n						<div class=\"col-xs-12\">\n							<div class=\"comment-author-avatar\">"
    + ((stack1 = this.invokePartial(partials.PartialAvatar,depth0,{"name":"PartialAvatar","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>\n							<div class=\"comment__text-input\">"
    + ((stack1 = this.invokePartial(partials.PartialTextInput,depth0,{"name":"PartialTextInput","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>\n							<div class=\"comment__text-input-button\">"
    + ((stack1 = this.invokePartial(partials.PartialButton,depth0,{"name":"PartialButton","hash":{"class":"solid-button--happy pull-right"},"data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>\n						</div>\n					</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=helpers.helperMissing, alias2="function", alias3=helpers.blockHelperMissing, buffer = 
  "<div class=\"row\">\n	<div class=\"col-xs-12\">\n		<div class=\"app-block event-post-it\">\n			<div class=\"row\">\n				<div class=\"col-xs-12\">\n					<div class=\"event-post-it--meta\">\n";
  stack1 = ((helper = (helper = helpers.eventpostitMeta || (depth0 != null ? depth0.eventpostitMeta : depth0)) != null ? helper : alias1),(options={"name":"eventpostitMeta","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.eventpostitMeta) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "					</div>\n				</div>	\n			</div>\n			<div class=\"row\">\n					<div class=\"event-post-it__header-image\">\n";
  stack1 = ((helper = (helper = helpers.eventHeaderImage || (depth0 != null ? depth0.eventHeaderImage : depth0)) != null ? helper : alias1),(options={"name":"eventHeaderImage","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.eventHeaderImage) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "					</div>\n			</div>		\n			<div class=\"row\">\n				<div class=\"col-xs-12\">\n					<div class=\"event-post-it__content\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.eventpostitContent : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "					</div>\n				</div>\n			</div>\n			<div class=\"row\">\n				<div class=\"col-xs-12\">\n					<div class=\"event-post-it__action-bar\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.eventpostitActions : depth0),{"name":"each","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.eventpostitLikes : depth0),{"name":"if","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "					</div>\n				</div>\n			</div>\n		</div>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.comments : depth0),{"name":"if","hash":{},"fn":this.program(15, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.commentInputField : depth0),{"name":"if","hash":{},"fn":this.program(18, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n</div>";
},"usePartial":true,"useData":true});

this["ui"]["component"]["template"]["header"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "            ";
  stack1 = ((helper = (helper = helpers.logo || (depth0 != null ? depth0.logo : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"logo","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.logo) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"2":function(depth0,helpers,partials,data) {
    var helper;

  return "<a href=\"/\"><img src=\""
    + this.escapeExpression(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"src","hash":{},"data":data}) : helper)))
    + "\" class=\"header-logo pull-left\"></a>";
},"4":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  " ";
  stack1 = ((helper = (helper = helpers.input || (depth0 != null ? depth0.input : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"input","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.input) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + " ";
},"5":function(depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = this.invokePartial(partials.PartialTextInput,depth0,{"name":"PartialTextInput","hash":{"class":"text-input__grey"},"data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + " ";
},"7":function(depth0,helpers,partials,data) {
    var stack1;

  return "                    <li>"
    + ((stack1 = this.invokePartial(partials.PartialNavItem,depth0,{"name":"PartialNavItem","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</li>                    \n";
},"9":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.PartialIcon,depth0,{"name":"PartialIcon","data":data,"indent":"                    ","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"11":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = "";

  stack1 = ((helper = (helper = helpers.dropdown || (depth0 != null ? depth0.dropdown : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"dropdown","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.dropdown) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"12":function(depth0,helpers,partials,data) {
    var stack1;

  return "               <div class=\"pull-right\"> "
    + ((stack1 = this.invokePartial(partials.PartialDropdown,depth0,{"name":"PartialDropdown","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "\n<div class=\"row header\">\n    <div class=\"header-container\">\n        <div class=\"col-md-3\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.logo : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n        <div class=\"col-md-6\"> \n            "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.input : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " \n        \n        </div> \n\n        <div class=\"col-md-3\">\n        \n            <div class=\"nav nav--horizontal pull-right\">\n";
  stack1 = ((helper = (helper = helpers.navItems || (depth0 != null ? depth0.navItems : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"navItems","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.navItems) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.navIcons : depth0),{"name":"each","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.dropdown : depth0),{"name":"if","hash":{},"fn":this.program(11, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n    </div>\n</div> \n\n";
},"usePartial":true,"useData":true});

this["ui"]["component"]["template"]["icon"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "	<div class=\"row\">"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.icons : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"col-xs-9 col-sm-6 col-md-4\"><div class=\"app-block\">"
    + ((stack1 = this.invokePartial(partials.PartialIcon,depth0,{"name":"PartialIcon","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div></div>";
},"4":function(depth0,helpers,partials,data) {
    var stack1;

  return "	"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.icons : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"5":function(depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = this.invokePartial(partials.PartialIcon,depth0,{"name":"PartialIcon","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + " ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.styleguide : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["ui"]["component"]["template"]["image"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "image--cover";
},"3":function(depth0,helpers,partials,data) {
    return "image--body";
},"5":function(depth0,helpers,partials,data) {
    return "onclick=\"$(this).children('img.modal-view').toggleClass('image-overlay');$(this).children('div.modal-view').toggleClass('bg-overlay');\"";
},"7":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"modal-view\"></div><img src=\""
    + alias3(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"src","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias3(((helper = (helper = helpers.alt || (depth0 != null ? depth0.alt : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"alt","hash":{},"data":data}) : helper)))
    + "\" class=\"modal-view\">";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"image "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.cover : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\" "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.modal : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.modal : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<img src=\""
    + alias3(((helper = (helper = helpers.src || (depth0 != null ? depth0.src : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"src","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias3(((helper = (helper = helpers.alt || (depth0 != null ? depth0.alt : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"alt","hash":{},"data":data}) : helper)))
    + "\"></div>";
},"useData":true});

this["ui"]["component"]["template"]["nav"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.navCommunities : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"2":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.PartialCommunitySwitch,depth0,{"name":"PartialCommunitySwitch","data":data,"indent":"\t\t","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"4":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"nav-title\">\n\n	"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.navTitleIcon : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n\n	"
    + this.escapeExpression(((helper = (helper = helpers.navTitle || (depth0 != null ? depth0.navTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"navTitle","hash":{},"data":data}) : helper)))
    + "\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.button : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"5":function(depth0,helpers,partials,data) {
    var helper;

  return "<i class=\"nav-title__icon "
    + this.escapeExpression(((helper = (helper = helpers.navTitleIcon || (depth0 != null ? depth0.navTitleIcon : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"navTitleIcon","hash":{},"data":data}) : helper)))
    + "\"></i>";
},"7":function(depth0,helpers,partials,data) {
    var stack1;

  return "	<div class=\"nav-title__button pull-right\">"
    + ((stack1 = this.invokePartial(partials.PartialButton,depth0,{"name":"PartialButton","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>\n";
},"9":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"sub-title\">\n	<span class=\"category\">"
    + alias3(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"category","hash":{},"data":data}) : helper)))
    + "</span>\n	<span class=\"name\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n</div>\n";
},"11":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.PartialNavItem,depth0,{"name":"PartialNavItem","data":data,"indent":"\t\t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.dropdown : depth0),{"name":"if","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"12":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = "";

  stack1 = ((helper = (helper = helpers.dropdown || (depth0 != null ? depth0.dropdown : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"dropdown","hash":{},"fn":this.program(13, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.dropdown) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"13":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.PartialDropdown,depth0,{"name":"PartialDropdown","data":data,"indent":"\t\t\t\t","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"15":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = "";

  stack1 = ((helper = (helper = helpers.navActionBarButtons || (depth0 != null ? depth0.navActionBarButtons : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"navActionBarButtons","hash":{},"fn":this.program(16, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.navActionBarButtons) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"16":function(depth0,helpers,partials,data) {
    var stack1;

  return "		<li class=\"nav__action-bar__button\">"
    + ((stack1 = this.invokePartial(partials.PartialButton,depth0,{"name":"PartialButton","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=helpers.helperMissing, alias2="function", buffer = 
  "<div class=\"nav app-block\" id=\""
    + this.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.communitySwitch : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.subTitle : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	<li class=\"first\"></li>\n";
  stack1 = ((helper = (helper = helpers.navItems || (depth0 != null ? depth0.navItems : depth0)) != null ? helper : alias1),(options={"name":"navItems","hash":{},"fn":this.program(11, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.navItems) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.navActionBar : depth0),{"name":"if","hash":{},"fn":this.program(15, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "	<li class=\"last\"></li>\n</div>";
},"usePartial":true,"useData":true});

this["ui"]["component"]["template"]["partials"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});

this["ui"]["component"]["template"]["postitactionbar"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.PartialButton,depth0,{"name":"PartialButton","data":data,"indent":"\t\t\t\t","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = "";

  stack1 = ((helper = (helper = helpers.postitLikes || (depth0 != null ? depth0.postitLikes : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"postitLikes","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.postitLikes) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"4":function(depth0,helpers,partials,data) {
    var helper;

  return "				<a class=\"naked-button--strict pull-right\">"
    + this.escapeExpression(((helper = (helper = helpers.number || (depth0 != null ? depth0.number : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"number","hash":{},"data":data}) : helper)))
    + " people like this</a>	\n";
},"6":function(depth0,helpers,partials,data) {
    var stack1;

  return "			<div class=\"row\">\n				<div class=\"col-xs-12\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.hiddenComments : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.comments : depth0),{"name":"each","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "				</div>\n			</div>\n";
},"7":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.hiddenComments : depth0),{"name":"each","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "					<div class=\"show-all-comments\">\n\n						<p><a href=\""
    + this.escapeExpression(((helper = (helper = helpers.href || (depth0 != null ? depth0.href : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"href","hash":{},"data":data}) : helper)))
    + "\">Show all comments</a></p>\n					</div>\n";
},"8":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "					<div class=\"comment-author-avatar\">"
    + ((stack1 = this.invokePartial(partials.PartialAvatar,depth0,{"name":"PartialAvatar","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>\n					<div class=\"comment--meta\"><span class=\"comment-author\">"
    + alias3(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"author","hash":{},"data":data}) : helper)))
    + " </span> <span class=\"comment-timestamp\"> "
    + alias3(((helper = (helper = helpers.timestamp || (depth0 != null ? depth0.timestamp : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"timestamp","hash":{},"data":data}) : helper)))
    + "</span></div>\n					<div class=\"comment-content\"><p>"
    + ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p></div>\n";
},"10":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2=this.escapeExpression, alias3="function";

  return "					"
    + alias2((helpers.freshComments || (depth0 && depth0.freshComments) || alias1).call(depth0,"[{\"id\":\"2480\",\"postitID\":\"2711\",\"dateAdded\":\"1440667593\",\"dateModified\":\"1440667593\",\"body\":\"A single postit!\",\"userId\":\"1836\",\"user\":{\"firstName\":\"Tijs\",\"lastName\":\"Bakker\",\"gender\":\"1\",\"description\":\"Hello, how are you?\",\"emailAddress\":\"tijs@mrwatson.com\",\"pictureFull\":\"https:\\/\\/www.filepicker.io\\/api\\/file\\/7jFjPuXTLWzX9xbr1JBO\"}},{\"id\":\"2481\",\"postitID\":\"2711\",\"dateAdded\":\"1441274857\",\"dateModified\":\"1441274857\",\"body\":\"HAloo\\r\\n\",\"userId\":\"1836\",\"user\":{\"firstName\":\"Tijs\",\"lastName\":\"Bakker\",\"gender\":\"1\",\"description\":\"Hello, how are you?\",\"emailAddress\":\"tijs@mrwatson.com\",\"pictureFull\":\"https:\\/\\/www.filepicker.io\\/api\\/file\\/7jFjPuXTLWzX9xbr1JBO\"}},{\"id\":\"2482\",\"postitID\":\"2711\",\"dateAdded\":\"1441274863\",\"dateModified\":\"1441274863\",\"body\":\"Yo, yo\",\"userId\":\"1836\",\"user\":{\"firstName\":\"Tijs\",\"lastName\":\"Bakker\",\"gender\":\"1\",\"description\":\"Hello, how are you?\",\"emailAddress\":\"tijs@mrwatson.com\",\"pictureFull\":\"https:\\/\\/www.filepicker.io\\/api\\/file\\/7jFjPuXTLWzX9xbr1JBO\"}},{\"id\":\"2483\",\"postitID\":\"2711\",\"dateAdded\":\"1441275149\",\"dateModified\":\"1441275149\",\"body\":\"Hi\",\"userId\":\"1836\",\"user\":{\"firstName\":\"Tijs\",\"lastName\":\"Bakker\",\"gender\":\"1\",\"description\":\"Hello, how are you?\",\"emailAddress\":\"tijs@mrwatson.com\",\"pictureFull\":\"https:\\/\\/www.filepicker.io\\/api\\/file\\/7jFjPuXTLWzX9xbr1JBO\"}}]",{"name":"freshComments","hash":{},"data":data}))
    + "				\n					<div class=\"comment-author-avatar\">"
    + ((stack1 = this.invokePartial(partials.PartialAvatar,depth0,{"name":"PartialAvatar","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>\n					<div class=\"comment--meta\"><span class=\"comment-author\">"
    + alias2(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"author","hash":{},"data":data}) : helper)))
    + " </span> <span class=\"comment-timestamp\"> "
    + alias2(((helper = (helper = helpers.timestamp || (depth0 != null ? depth0.timestamp : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"timestamp","hash":{},"data":data}) : helper)))
    + "</span></div>\n					<div class=\"comment-content\"><p>"
    + ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias3 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p></div>\n";
},"12":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "				<div class=\"post-it__input-field\">\n";
  stack1 = ((helper = (helper = helpers.commentInputField || (depth0 != null ? depth0.commentInputField : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"commentInputField","hash":{},"fn":this.program(13, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.commentInputField) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "				</div>\n";
},"13":function(depth0,helpers,partials,data) {
    var stack1;

  return "						<div class=\"row\">\n							<div class=\"col-xs-12\">\n								<div class=\"comment-author-avatar\">"
    + ((stack1 = this.invokePartial(partials.PartialAvatar,depth0,{"name":"PartialAvatar","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>\n								<div class=\"comment__text-input\">"
    + ((stack1 = this.invokePartial(partials.PartialTextInput,depth0,{"name":"PartialTextInput","data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>\n								<div class=\"comment__text-input-button\">"
    + ((stack1 = this.invokePartial(partials.PartialButton,depth0,{"name":"PartialButton","hash":{"class":"solid-button--happy pull-right"},"data":data,"helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "</div>\n							</div>\n						</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"post-it__action-bar\">\n<div class=\"row\">\n	<div class=\"col-xs-12\">\n		<div class=\"post-it__actions\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.postitActions : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.postitLikes : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n	</div> \n	<div class=\"col-xs-12\">\n		<div class=\"app-block--no-bg\">\n			<div class=\"post-it__comments\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.comments : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "			</div>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.commentInputField : depth0),{"name":"if","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "		</div>\n	</div>\n</div>\n</div>";
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
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "	<div class=\""
    + alias3(((helper = (helper = helpers.inputId || (depth0 != null ? depth0.inputId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"inputId","hash":{},"data":data}) : helper)))
    + "\">\n      <input id=\""
    + alias3(((helper = (helper = helpers.inputId || (depth0 != null ? depth0.inputId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"inputId","hash":{},"data":data}) : helper)))
    + "\" class=\"inputMaterial\" type=\""
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + alias3(((helper = (helper = helpers.inputId || (depth0 != null ? depth0.inputId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"inputId","hash":{},"data":data}) : helper)))
    + "\" required "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.minlength : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.maxlength : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " >\n      <span class=\"bar\"></span>\n      <label for=\""
    + alias3(((helper = (helper = helpers.inputId || (depth0 != null ? depth0.inputId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"inputId","hash":{},"data":data}) : helper)))
    + "\">"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.icon : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " "
    + alias3(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"label","hash":{},"data":data}) : helper)))
    + "</label>         \n   </div>\n";
},"2":function(depth0,helpers,partials,data) {
    var helper;

  return "\n      minlength=\""
    + this.escapeExpression(((helper = (helper = helpers.minlength || (depth0 != null ? depth0.minlength : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"minlength","hash":{},"data":data}) : helper)))
    + "\" ";
},"4":function(depth0,helpers,partials,data) {
    var helper;

  return " maxlength=\""
    + this.escapeExpression(((helper = (helper = helpers.maxlength || (depth0 != null ? depth0.maxlength : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"maxlength","hash":{},"data":data}) : helper)))
    + "\" ";
},"6":function(depth0,helpers,partials,data) {
    var helper;

  return " <i class=\"icon "
    + this.escapeExpression(((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"icon","hash":{},"data":data}) : helper)))
    + "\"> </i>";
},"8":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "   <div class=\"text-input "
    + alias3(((helper = (helper = helpers['class'] || (depth0 != null ? depth0['class'] : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"class","hash":{},"data":data}) : helper)))
    + "\"><input "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.background : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.required : depth0),{"name":"if","hash":{},"fn":this.program(11, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + " name=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" type=\""
    + alias3(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"type","hash":{},"data":data}) : helper)))
    + "\" placeholder=\""
    + alias3(((helper = (helper = helpers.placeholder || (depth0 != null ? depth0.placeholder : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"placeholder","hash":{},"data":data}) : helper)))
    + "\" value=\""
    + alias3(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\"></div>\n";
},"9":function(depth0,helpers,partials,data) {
    return "class=\"text-input__grey\"";
},"11":function(depth0,helpers,partials,data) {
    return "required";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<form method=\"get\" class=\"neu mytest\" id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" action=\""
    + alias3(((helper = (helper = helpers.action || (depth0 != null ? depth0.action : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"action","hash":{},"data":data}) : helper)))
    + "\">\n		\n	\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.hasLabel : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(8, data, 0),"data":data})) != null ? stack1 : "")
    + "</form>\n<script>\n    // validate the form when it is submitted\n    var validator = $(\"#"
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"id","hash":{},"data":data}) : helper)))
    + "\").validate({\n        errorPlacement: function(error, element) {\n            // Append error within linked label\n            $( element )\n                .closest( \"form\" )\n                    .find( \"div[class='\" + element.attr( \"id\" ) + \"']\" )\n                        .prepend( error );\n        },\n        errorElement: \"div\",\n        messages: {\n            "
    + ((stack1 = ((helper = (helper = helpers.inputId || (depth0 != null ? depth0.inputId : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"inputId","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + ": {\n                required: \" required\",\n                minlength: \" must be between "
    + alias3(((helper = (helper = helpers.minlength || (depth0 != null ? depth0.minlength : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"minlength","hash":{},"data":data}) : helper)))
    + " and "
    + alias3(((helper = (helper = helpers.maxlength || (depth0 != null ? depth0.maxlength : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"maxlength","hash":{},"data":data}) : helper)))
    + " characters\",\n                maxlength: \" must be between "
    + alias3(((helper = (helper = helpers.minlength || (depth0 != null ? depth0.minlength : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"minlength","hash":{},"data":data}) : helper)))
    + " and "
    + alias3(((helper = (helper = helpers.maxlength || (depth0 != null ? depth0.maxlength : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"maxlength","hash":{},"data":data}) : helper)))
    + " characters\"\n            }\n        }\n    });\n    $(\".cancel\").click(function() {\n        validator.resetForm();\n    });\n</script>";
},"useData":true});

this["ui"]["component"]["template"]["userpostit"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function";

  return "							<div class=\"postit-avatar\">\n"
    + ((stack1 = this.invokePartial(partials.PartialAvatar,depth0,{"name":"PartialAvatar","data":data,"indent":"\t\t\t\t\t\t\t\t","helpers":helpers,"partials":partials})) != null ? stack1 : "")
    + "							</div>\n							<div class=\"postit-author\">"
    + this.escapeExpression(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"author","hash":{},"data":data}) : helper)))
    + "</div>\n							<div class=\"postit-timestamp\">"
    + ((stack1 = ((helper = (helper = helpers.timestamp || (depth0 != null ? depth0.timestamp : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"timestamp","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = "";

  stack1 = ((helper = (helper = helpers.userpostitContent || (depth0 != null ? depth0.userpostitContent : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"userpostitContent","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0,options) : helper));
  if (!helpers.userpostitContent) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"4":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.content : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.program(7, data, 0),"data":data})) != null ? stack1 : "");
},"5":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "								<p>"
    + ((stack1 = ((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\n";
},"7":function(depth0,helpers,partials,data) {
    return "								<p>...</p>\n";
},"9":function(depth0,helpers,partials,data) {
    return "							<p>...</p>\n";
},"11":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = this.invokePartial(partials.PartialPostItActionBar,depth0,{"name":"PartialPostItActionBar","data":data,"indent":"\t\t\t\t","helpers":helpers,"partials":partials})) != null ? stack1 : "");
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=helpers.helperMissing, alias2="function", alias3=helpers.blockHelperMissing, buffer = 
  "<div class=\"row\">\n	<div class=\"col-xs-12\">\n		<div class=\"app-block user-post-it\">\n			<div class=\"row\">\n				<div class=\"col-xs-12\">\n					<div class=\"user-post-it--meta\">\n";
  stack1 = ((helper = (helper = helpers.userpostitMeta || (depth0 != null ? depth0.userpostitMeta : depth0)) != null ? helper : alias1),(options={"name":"userpostitMeta","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.userpostitMeta) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "					</div>\n				</div>	\n			</div>		\n			<div class=\"row\">\n				<div class=\"col-xs-12\">\n					<div class=\"user-post-it__content\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.userpostitContent : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "					</div>\n				</div>\n			</div>\n		</div>\n		<div class=\"row\">\n			<div class=\"col-xs-12\">\n";
  stack1 = ((helper = (helper = helpers.userpostitActionBlock || (depth0 != null ? depth0.userpostitActionBlock : depth0)) != null ? helper : alias1),(options={"name":"userpostitActionBlock","hash":{},"fn":this.program(11, data, 0),"inverse":this.noop,"data":data}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.userpostitActionBlock) { stack1 = alias3.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "			</div>\n		</div>\n\n	</div>\n</div>";
},"usePartial":true,"useData":true});
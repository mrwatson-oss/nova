var ui = ui || {};
ui.component.partials = (function($, T) {
        var partials = {};

        function render(context) {
            Handlebars.registerHelper('freshComments', function(comments) {
                var userComments = JSON.parse(comments);
                if (userComments.length>2) {return userComments[0];} else{return userComments;};

            });
            Handlebars.registerHelper('oldComments', function(comments) {
                var userComments = JSON.parse(comments);
                 if (userComments.length>2) {return userComments[2];} else{return;};
            });
            Handlebars.registerPartial({
                'PartialAvatar': '{{#if avatar}}{{#avatar}}<div class="avatar {{#if small}}avatar--small{{/if}} {{#if round}} round{{/if}}"><img {{#if src}}src="{{src}}" {{else}}src="https://www.filepicker.io/api/file/Xr1rtfRBRd6HVNVynfMu"{{/if}} alt="avatar"></div>{{/avatar}}{{else}}<div class="avatar {{#if small}}avatar--small{{/if}}"><img src="https://www.filepicker.io/api/file/Xr1rtfRBRd6HVNVynfMu" alt="avatar"/></div>{{/if}}',
                'PartialButton': '<button {{#if disabled}}disabled{{/if}} class="btn {{class}} {{#if icon}}icon-only{{/if}}" id="{{id}}" name="{{name}}" type="{{type}}" value="{{value}}" {{action}}" {{#if cancel}} formnovalidate {{/if}}>{{#if buttonLoader}} <div class="btn__loading-container"><span class="btn__loading-circle">&nbsp;</span><span class="btn__loading-circle">&nbsp;</span><span class="btn__loading-circle">&nbsp;</span><span class="btn__loading-circle">&nbsp;</span></div>{{/if}} {{#if iconOnly}}{{#if icon}}<i class="icon {{icon}}"></i>{{/if}}{{else}}{{#if icon}}<i class="icon {{icon}}"></i> {{/if}}{{#if content}} {{content}} {{/if}} {{/if}}</button>',
                'PartialDropdown': '<li class="dropdown" id="dropdown"><span class="dropdown-item"><h4>{{{dropdownItem}}}</h4></span>{{#if icon}}<i class="{{icon}}"></i>{{/if}}{{#if badge}}<span class="dropdown-badge">{{dropdownOptions.length}}</span>{{/if}}<ul class="nav drop-nav">{{#each dropdownOptions}}<li>{{#if optionCat}}<div class="option-catagory">{{option}}</div>{{else}}<a id="{{id}}"class="{{class}}"href="{{href}}">{{option}}</a>{{/if}}</li>{{/each}}</ul><script>{{script}}</script></li>',
                'PartialTextInput': ui.component.textInput.render({
                    'class': '{{class}}',
                    'id': '{{id}}',
                    'name': '{{name}}',
                    'value': '{{value}}',
                    'placeholder': '{{placeholder}}',
                    'hasLabel': false,
                    'label': '{{label}}'
                }),
                'PartialTextarea': '<div class="text-area {{class}}"><textarea class="autoExpand" rows="0" data-min-rows="1" {{#if background}}class="text-input__grey"{{/if}} {{#if required}}required{{/if}} name="{{name}}" id="{{id}}" type="text" placeholder="{{placeholder}}" value="{{value}}"></textarea></div>',
                'PartialPostItActionBar': '<div class="post-it__action-bar"><div class="row"><div class="col-xs-12"><div class="post-it__actions">{{#each postitActions}}{{>PartialButton}}{{/each}}{{#if postitLikes}}{{#postitLikes}}<a class="naked-button--strict pull-right">{{number}} people like this</a>{{/postitLikes}}{{/if}}</div></div><div class="col-xs-12"><div class="app-block--no-bg"><div class="post-it__comments" class="post-it__comments">{{#if comments}}<div class="row"><div class="col-xs-12">{{#each comments}}<div class="comment-author-avatar">{{>PartialAvatar}}</div><div class="comment--meta"><span class="comment-author">{{author}} </span> <span class="comment-timestamp"> {{timestamp}}</span></div><div class="comment-content"><p>{{{content}}}</p></div>{{/each}}</div></div>{{/if}}</div>{{#if commentInputField}}<div class="post-it__input-field">{{#commentInputField}}<div class="row"><div class="col-xs-12"><div class="comment-author-avatar">{{>PartialAvatar}}</div><div class="comment__text-input">{{>PartialTextInput}}</div><div class="comment__text-input-button">{{>PartialButton class="solid-button--happy pull-right"}}</div></div></div>{{/commentInputField}}</div>{{/if}}</div></div></div></div>',
                'PartialIcon': '<i class="{{icon}} {{class}}"></i>{{#if label}}<pre class="language-markup"><code class="language-markup">{{icon}}</code></pre>{{/if}}',
                'PartialCoverImage': ui.component.image.render({
                    'cover': true,
                    'src': '{{{src}}}',
                    'alt': '{{alt}}'
                }),
                'PartialLoading': '<div class="btn__loader"><div class="btn--loading"><div class="btn__loading-circle">&nbsp;</div><div class="btn__loading-circle">&nbsp;</div><div class="btn__loading-circle">&nbsp;</div><div class="btn__loading-circle">&nbsp;</div></div></div>',
                'PartialCommunitySwitch': '<div class="community-switch" style="background: no-repeat center url({{src}})"><span class="community-switch-name">{{name}}{{#if icon}}<i class="icon {{icon}}"></i>{{/if}}</span></div>',
                'PartialNavItem': '<li><a class="{{class}} "href="{{baseurl}}{{url}}">{{#if icon}}<i class="icon {{icon}}"></i>{{/if}}{{{item}}}</a></li>'
            });
            data = $.extend({}, partials, context);

            return T.partials(data);
        }

        return {
            render: render
        };


    }
    (jQuery, ui.component.template));


// ,
// 'src': 'http://i160.photobucket.com/albums/t164/mtms4/hobo.jpg',
// 'round': true,
// 'src': 'http://i160.photobucket.com/albums/t164/mtms4/hobo.jpg',
// 'small': true,
// 'src': 'http://i160.photobucket.com/albums/t164/mtms4/hobo.jpg',
// 'round': true,
// 'small': true

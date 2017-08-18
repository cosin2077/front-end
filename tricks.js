
var hiddenProperty = 'hidden' in document ? 'hidden' :    
    'webkitHidden' in document ? 'webkitHidden' :    
    'mozHidden' in document ? 'mozHidden' :    
    null;
var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
var tit=document.title;
var onVisibilityChange = function(){
    if (!document[hiddenProperty]) {    
        document.title=tit;
    }else{
        document.title="hello!!!";
    }
}
document.addEventListener(visibilityChangeEvent, onVisibilityChange);
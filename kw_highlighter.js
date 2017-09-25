walk(document.body);
setTimeout(function () {
  walk(document.body);
}, 2000);

function walk(node)
{
  // Source: http://is.gd/mwZp7E
  console.log('logged from DRUMPHIMY');

  var child, next;

  switch ( node.nodeType )
  {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
    child = node.firstChild;
    while ( child )
    {
      next = child.nextSibling;
      walk(child);
      child = next;
    }
    break;

    case 3: // Text node
    handleText(node);
    break;
  }
}

function handleText(textNode)
{
  var v = textNode.nodeValue;

  var highlightIt = word => {
    // return `<span style="background-color:red; color:white; padding:0 5px;">${word}</span>`
    return `KW ==> ${word}`
  }
  v = v.replace(/\bTrump\b/g, highlightIt("Drumpf"));
  v = v.replace(/\bTRUMP\b/g, highlightIt("DRUMPF"));
  v = v.replace(/\bTRUMPS\b/g, highlightIt("DRUMPFS"));
  v = v.replace(/\bTrumps\b/g, highlightIt("Drumpfs"));
  v = v.replace(/\bdonaldjtrump\b/g, highlightIt("donaldjdrumpf"));
  v = v.replace(/\bdonaldtrump\b/g, highlightIt("donalddrumpf"));
  v = v.replace(/\brealdonaldtrump\b/g, highlightIt("realdonalddrumpf"));
  v = v.replace(/\brealDonaldTrump\b/g, highlightIt("realDonaldDrumpf"));
  v = v.replace(/\bMake America Great Again\b/g, highlightIt("Make Donald Drumpf Again"));
  v = v.replace(/\bMake America Great Again!\b/g, highlightIt("Make Donald Drumpf Again!"));

  textNode.nodeValue = v;
}

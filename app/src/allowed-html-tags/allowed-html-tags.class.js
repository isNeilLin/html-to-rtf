const HtmlTags = require('./html-tags.module');

class AllowedHtmlTags {
  static getRtfReferenceTag(tagName) {
    tagName = tagName.toLowerCase();
    for (let i = 0; i < HtmlTags.length; i++) {
      if (HtmlTags[i].opening == tagName)
          return HtmlTags[i].openingRtf;
      if (HtmlTags[i].closing == tagName)
        return HtmlTags[i].closingRtf;
    }
    return undefined;
  }
}
module.exports = AllowedHtmlTags;
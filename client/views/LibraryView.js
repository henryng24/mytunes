// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  el: $('.library'),

  tagName: "table",

  initialize: function() {
    this.render();
    this.collection.on('change', this.render, this);
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<thead><th>Artist</th><th>Title</th><th>Plays</th><th>Votes</th><th>Upvote</th><th>Downvote</th></thead>').append(
      this.collection.map(function(song){
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});

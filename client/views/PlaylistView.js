var PlaylistView = Backbone.View.extend({

  el: $(".song-queue"),

  //tagName: "table",

  initialize: function() {
    this.collection.on('add remove', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html('<thead><th>Artist</th><th>Title</th></thead> ').append(
      this.collection.map(function(song){
        return new PlaylistEntryView({model: song}).render();
      })
    );
  },

});
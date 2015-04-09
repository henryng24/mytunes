// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  el: $(".song-queue"),

  tagName: "table",

  initialize: function() {
    this.collection.on('add remove', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html('<th>SongQueue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  },

});

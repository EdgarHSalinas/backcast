var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    console.log('VideoListEntryView ' + VideoListEntryView);
    this.on('select:trigger', this.render(), this);
  },

  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  handleClick: function() {
    this.model.select();
  }, 

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});

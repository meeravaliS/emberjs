import DS from 'ember-data';

export default DS.Model.extend({
  from: DS.attr('string'),
  to: DS.attr('string'),
  airline: DS.attr('string'),
  departure: DS.attr('string'),
  arrive: DS.attr('string'),
  duration: DS.attr('string'),
  price: DS.attr('string'),
});

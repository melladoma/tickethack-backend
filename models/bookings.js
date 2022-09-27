const bookingSchema = mongoose.Schema({
    editor: { type: mongoose.Schema.Types.ObjectId, ref: 'trips' }
   });

   const Booking = mongoose.model('bookings', bookingSchema);
   
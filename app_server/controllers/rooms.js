/* GET rooms page */
const rooms = (req, res) => {
    res.render('rooms', { title: 'Travlr Getaways' });
};

module.exports = {
    rooms
}
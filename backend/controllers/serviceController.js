const Service = require("../models/Service");

// GET all services
exports.getServices = async (req, res) => {
  try {
    // Hardcoded services with sub-items
    const services = [
      {
        _id: "1",
        name: "Facial",
        ratings: [],
        items: [
          { name: "Fruit Pack", price: 350 },
          { name: "Gold", price: 1000 },
          { name: "Whitening", price: 700 },
          { name: "Lotus", price: 1200 },
          { name: "Wine", price: 700 },
          { name: "Perl", price: 700 },
          { name: "Diamond", price: 1000 }
        ]
      },
      {
        _id: "2",
        name: "Bleach",
        ratings: [],
        items: [
          { name: "Oliva + Whitening Facial", price: 1000 },
          { name: "Diamond", price: 1500 },
          { name: "Wine + Whitening Facial", price: 1000 },
          { name: "Diamond", price: 1000 }
        ]
      },
      {
        _id: "3",
        name: "Wax",
        ratings: [],
        items: [
          { name: "Gold Hand", price: 400 },
          { name: "Gold Leg", price: 500 },
          { name: "Honey Hand", price: 400 },
          { name: "Honey Leg", price: 500 }
        ]
      },
      {
        _id: "4",
        name: "Haircut",
        ratings: [],
        items: [
          { name: "Level Cut", price: 100 },
          { name: "U Cut", price: 150 },
          { name: "Deep U Cut", price: 200 },
          { name: "Step Cut", price: 500 },
          { name: "Feather Cut", price: 500 },
          { name: "Layer Cut", price: 500 },
          { name: "Baby Cut", price: 200 }
        ]
      },
      {
        _id: "5",
        name: "Pedicure",
        ratings: [],
        items: [
          { name: "Pedicure", price: 700 }
        ]
      },
      {
        _id: "6",
        name: "Manicure",
        ratings: [],
        items: [
          { name: "Manicure", price: 500 }
        ]
      },
      {
        _id: "7",
        name: "Head Massage",
        ratings: [],
        items: [
          { name: "Head Massage", price: 350 }
        ]
      },
      {
        _id: "8",
        name: "Mehendi",
        ratings: [],
        items: [
          { name: "Arabic Design", price: 300 },
          { name: "Indian Design", price: 1000 }
        ]
      },
      {
        _id: "9",
        name: "Rent Jewelry Set",
        ratings: [],
        items: [
          { name: "Jewelry Set", price: 1000 }
        ]
      },
      {
        _id: "10",
        name: "Makeup",
        ratings: [],
        items: [
          { name: "Reception Bridal Makeup", price: 5000 },
          { name: "Muhurtham Bridal Makeup", price: 5000 },
          { name: "Eyebrow", price: 50 },
          { name: "Face Threading", price: 200 },
          { name: "Saree Draping", price: 300 }
        ]
      }
    ];

    // Calculate avgRating for each service
    const result = services.map(s => ({
      ...s,
      avgRating: s.ratings.length
        ? s.ratings.reduce((a, b) => a + b, 0) / s.ratings.length
        : 0
    }));

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ADD rating
exports.addRating = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    service.ratings.push(req.body.rating);
    await service.save();

    res.json(service);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
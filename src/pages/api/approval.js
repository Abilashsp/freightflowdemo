export default function handler(req, res) {
    res.status(200).json([
        {
            "name":"Mani",
            "Title":"CTO",
            "Status":"Active",
            "Role" : "Blab",
        },
        {
            "name":"Kalai",
            "Title":"CEO",
            "Status":"Active",
            "Role" : "Blab",
        },
        {
            "name":"Abi",
            "Title":"Jr.Dev",
            "Status":"Active",
            "Role" : "Blab",
        },

    ])
  }
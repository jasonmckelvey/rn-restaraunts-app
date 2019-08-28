import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer l64IGhR4HepL7FxxG71M_XdZkBt_ZJ3XRB7mUqlD_AGetsstJWCz7f09LHfk7-4VIXGTgMbVM2hhaJ3Kemus-jOoAdkBzl_2OzY9Ijvl3gbfrS6hEn4j5jeB985WXXYx"
  }
});

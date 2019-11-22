export const LOCATIONS =
  process.env.NODE_ENV === "production"
    ? [
        // TODO: handle this better lol
        "Ottawa, ON, Canada",
        "Santa Monica, CA, USA",
        "San Francisco, CA, USA",
        "Mountain View, CA, USA",
        "Palo Alto, CA, USA",
        "Toronto, ON, Canada",
        "Tokyo, Japan",
        "Menlo Park, CA, USA",
        "Foster City, CA, USA",
        "Austin, TX, USA",
        "Vancouver, BC, Canada",
        "Los Angeles, CA, USA",
        "Dublin, Ireland",
        "Bellevue, WA, USA",
        "New York, NY, USA",
        "Chicago, IL, USA",
        "Markham, ON, Canada",
        "Kitchener, ON, Canada",
        "Waterloo, ON, Canada",
        "Somerville, MA, USA",
        "Cambridge, MA, USA",
        "Jersey City, NJ, USA",
        "Burlington, ON, Canada",
        "London, UK",
        "San Mateo, CA, USA",
        "Cupertino, CA, USA",
        "Redwood City, CA, USA",
        "Calgary, AB, Canada",
        "Montreal, QC, Canada",
        "Boston, MA, USA",
        "Kirkland, WA, USA",
        "Hong Kong",
        "Seattle, WA, USA",
        "Mississauga, ON, Canada",
        "Germantown, MD, USA",
        "Pasadena, CA, USA",
        "Redmond, WA, USA",
        "Santa Clara, CA, USA",
        "Hamilton, ON, Canada",
        "Sunnyvale, CA, USA",
        "Stamford, CT, USA",
        "Irvine, CA, USA",
        "Fort Collins, CO, USA",
        "Cambridge, ON, Canada",
        "Rotterdam, Netherlands",
        "Guelph, ON, Canada",
        "Vaughan, ON, Canada",
        "Tsukuba, Ibaraki Prefecture, Japan",
        "Spring, TX 77373, USA",
        "Ajax, ON, Canada",
        "Vancouver, BC, CAN",
        "Brampton, ON, Canada",
        "Singapore",
        "Vancouver",
        "Ottawa",
        "Pune, Maharashtra, India",
        "Greenbelt, MD, USA",
        "Toronto",
        "Bengaluru, Karnataka, India",
        "Rome, NY, USA",
        "Waterloo",
        "London, ON, Canada",
        "Calgary",
        "San Francisco",
        "Miami, FL, USA",
        "Markham",
        "Toronto, Ontario, Canada",
        "Huntsville, ON, Canada",
        "美国加利福尼亚州森尼韦尔",
        "Newmarket, Ontario, Ontario, Canada",
        "Mississauga",
        "Campbell, CA, USA",
        "Kitchener",
        "Oakville, ON, Canada",
        "Winnipeg, MB, Canada",
        "North York",
        "Montreal",
        "Bellevue",
        "Oslo, Norway",
        "Gatineau, QC, Canada",
        "Burnaby, BC, Canada",
        "New York",
        "美国加利福尼亚州旧金山",
        "Newmarket, ON, Canada",
        "টরন্টো, অন্টারিও, কানাডা",
        "Pittsburgh, PA, USA",
        "美国华盛顿西雅图",
        "Fremont, CA, USA",
        "San Jose, CA, USA",
        "Windsor, ON, Canada",
      ]
    : ["Ohio", "Michigan", "North Carolina"];

export const useLocationSuggestions = () => ({
  suggestions: LOCATIONS,
});
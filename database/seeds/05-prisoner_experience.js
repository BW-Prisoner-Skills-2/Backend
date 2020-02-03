exports.seed = function(knex) {
  return knex("prisoner_experience").insert([
    {
      prisoner_id: 1,
      description: "Lathe Worker at Shank Co.",
      date: "1985-1994"
    },
    { prisoner_id: 1, description: "Welder At Boeing", date: "1995-1999" },
    {
      prisoner_id: 2,
      description: "Sewer At Aunt Malerie's",
      date: "1967-1982"
    },
    {
      prisoner_id: 2,
      description: "Metallurgy Hand At Rick's Smithing",
      date: "1987-1991"
    },
    {
      prisoner_id: 3,
      description: "Mill/Lathe Assistant At Dry Co.",
      date: "1998-2011"
    },
    {
      prisoner_id: 3,
      description: "Lathe Maintenance At Pascal Tuning",
      date: "2001-2006"
    },
    {
      prisoner_id: 4,
      description: "Painter At Prime Color",
      date: "1990-1994"
    },
    {
      prisoner_id: 4,
      description: "Carpenter At Chuck's Construction",
      date: "1975-1985"
    },
    {
      prisoner_id: 5,
      description: "Lathe Maintenance At Fisher Toyle",
      date: "1985-1994"
    },
    {
      prisoner_id: 5,
      description: "Sculpting At Oswald Museum",
      date: "2000-2005"
    },
    {
      prisoner_id: 6,
      description: "Automotive Assistant At Les Schwab",
      date: "2010-2015"
    },
    {
      prisoner_id: 6,
      description: "Carpenter At Diamond Crew",
      date: "2002-1994"
    },
    {
      prisoner_id: 7,
      description: "Automotive Assistant At Meineke",
      date: "1985-1994"
    },
    { prisoner_id: 7, description: "Cook At Sherry's", date: "2002-2004" },
    { prisoner_id: 8, description: "Masonry At Wet&Dry", date: "1999-2007" },
    { prisoner_id: 8, description: "Landscaper At Pamper", date: "2002-2009" },
    {
      prisoner_id: 9,
      description: "Demolition Technician At Schult'z Crew",
      date: "1985-1994"
    },
    {
      prisoner_id: 9,
      description: "Farm hand At Rick's Plum Field",
      date: "2012-2014"
    },
    {
      prisoner_id: 10,
      description: "Plumber At Pipes Done Right",
      date: "1999-2006"
    },
    {
      prisoner_id: 10,
      description: "Carpenter At Layaway Construction",
      date: "2008-2014"
    },
    {
      prisoner_id: 11,
      description: "Electrical At Sharp Fitters",
      date: "1995-1999"
    },
    {
      prisoner_id: 11,
      description: "Steamfitting At Sharp Fitters",
      date: "2004-2007"
    },
    {
      prisoner_id: 12,
      description: "Mechanic At Albunin Auto",
      date: "2001-2012"
    },
    {
      prisoner_id: 12,
      description: "Construction Worker At Onus Empires",
      date: "2012-2016"
    }
  ]);
};

const {
  getConcertsByArtistAndCity,
  getMerchandiseStallsByStallName,
  getAfterPartiesByCity,
} = require("../controllers/tourController.js");
const axiosInstance = require("../lib/axios.lib.js");

jest.mock("../lib/axios.lib.js", () => ({
  get: jest.fn(),
}));

describe("Tour Controller Tests", () => {
  test("should fetch concerts by artist and city", async () => {
    const mockResponse = {
      concerts: [
        {
          id: 2,
          artist: "Beyoncé",
          venue: "Madison Square Garden",
          city: "New York",
          date: "2024-08-15T20:00:00.000Z",
          ticketPrice: 6127,
          seatCategory: "Front Row",
        },
      ],
    };

    axiosInstance.get.mockResolvedValue(mockResponse);

    const req = { query: { artist: "Beyoncé", city: "New%20York" } };
    const res = { json: jest.fn(), status: jest.fn(() => res) };

    await getConcertsByArtistAndCity(req, res);

    expect(axiosInstance.get).toHaveBeenCalledWith(
      `/concerts/search?artist=Beyoncé&city=New%20York`
    );
    expect(res.json).toHaveBeenCalledWith(mockResponse.data);
  });

  test("should fetch MerchandiseStalls by stallName", async () => {
    const mockResponse = {
      merchandiseStalls: [
        {
          id: 1,
          stallName: "Rocking Tees",
          itemAvailable: "T-Shirts",
          price: 250,
        },
      ],
    };

    axiosInstance.get.mockResolvedValue(mockResponse);

    const req = { query: { stallName: "Rocking%20Tees" } };
    const res = { json: jest.fn(), status: jest.fn(() => res) };

    await getMerchandiseStallsByStallName(req, res);

    expect(axiosInstance.get).toHaveBeenCalledWith(
      `/merchandiseStalls/search?stallName=Rocking%20Tees`
    );
    expect(res.json).toHaveBeenCalledWith(mockResponse.data);
  });

  test("should fetch afterParties by city", async () => {
    const mockResponse = {
      afterParties: [
        {
          id: 11,
          location: "Vortex Club",
          city: "Phoenix",
          date: "2024-12-11T22:30:00.000Z",
          ticketPrice: 800,
        },
        {
          id: 30,
          location: "Velvet Nightclub",
          city: "Phoenix",
          date: "2024-12-30T22:30:00.000Z",
          ticketPrice: 900,
        },
      ],
    };

    axiosInstance.get.mockResolvedValue(mockResponse);

    const req = { query: { city: "Phoenix" } };
    const res = { json: jest.fn(), status: jest.fn(() => res) };

    await getAfterPartiesByCity(req, res);

    expect(axiosInstance.get).toHaveBeenCalledWith(
      `/afterParties/search?city=Phoenix`
    );
    expect(res.json).toHaveBeenCalledWith(mockResponse.data);
  });
});

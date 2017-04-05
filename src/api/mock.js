import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

export default function mockApi() {

  const mock = new MockAdapter(axios);

  mock.onGet('/locations').reply(200, ['aa', 'bb', 'cc', 'dd', 'aab', 'aac', 'bbd']);
  mock.onGet('/buses').reply(200, [
    {
      no: 'RAC122',
      arrival: '11.30',
      depart: '2:00',
    },
    {
      no: 'TVP122',
      arrival: '12.30',
      depart: '2:45',
    },
    {
      no: 'RAC322',
      arrival: '2.30',
      depart: '12:00',
    },
  ]);
  mock.onGet('/layout').reply(200, {
    busType: 'volvo',
    totalSeats: 42,
    doorPos: 4,
    seats:     [
      [
        {
          seatNo: 1,
          isReserved: false,
          isLadies: false,
        },
        {
          seatNo: 2,
          isReserved: false,
          isLadies: false,
        },
        {
          seatNo: 3,
          isReserved: true,
          isLadies: false,
        },
        {
          seatNo: 6,
          isReserved: false,
          isLadies: false,
        },
        {
          seatNo: 5,
          isReserved: false,
          isLadies: false,
        },
        {
          seatNo: 4,
          isReserved: true,
          isLadies: false,
        },
        {
          seatNo: 9,
          isReserved: true,
          isLadies: false,
        },
        {
          seatNo: 8,
          isReserved: true,
          isLadies: false,
        },
        {
          seatNo: 7,
          isReserved: true,
          isLadies: false,
        },
      ],
      [
        {
          seatNo: 12,
          isReserved: false,
          isLadies: false,
        },
        {
          seatNo: 13,
          isReserved: false,
          isLadies: false,
        },
        {
          seatNo: 14,
          isReserved: false,
          isLadies: false,
        },
        {
          seatNo: 15,
          isReserved: false,
          isLadies: false,
        },
        {
          seatNo: 16,
          isReserved: false,
          isLadies: false,
        },
        {
          seatNo: 19,
          isReserved: true,
          isLadies: false,
        },
        {
          seatNo: 18,
          isReserved: true,
          isLadies: false,
        },
        {
          seatNo: 17,
          isReserved: true,
          isLadies: false,
        },
        {
          seatNo: 20,
          isReserved: false,
          isLadies: true,
        },
      ],
      [
        {
          seatNo: 42,
          isReserved: false,
          isLadies: false,
        },
      ],
      [
        {
          seatNo: 22,
          isReserved: false,
          isLadies: false,
        },
        {
          seatNo: 23,
          isReserved: false,
          isLadies: false,
        },
        {
          seatNo: 24,
          isReserved: true,
          isLadies: false,
        },
        {
          seatNo: 25,
          isReserved: true,
          isLadies: false,
        },
        {
          seatNo: 26,
          isReserved: false,
          isLadies: false,
        },
        {
          seatNo: 27,
          isReserved: true,
          isLadies: false,
        },
        {
          seatNo: 28,
          isReserved: true,
          isLadies: false,
        },
        {
          seatNo: 29,
          isReserved: false,
          isLadies: true,
        },
        {
          seatNo: 31,
          isReserved: false,
          isLadies: false,
        },
        {
          seatNo: 30,
          isReserved: false,
          isLadies: false,
        },
      ],
      [
        {
          seatNo: 32,
          isReserved: false,
          isLadies: false,
        },
        {
          seatNo: 33,
          isReserved: true,
          isLadies: false,
        },
        {
          seatNo: 34,
          isReserved: true,
          isLadies: false,
        },
        {
          seatNo: 35,
          isReserved: true,
          isLadies: false,
        },
        {
          seatNo: 36,
          isReserved: true,
          isLadies: false,
        },
        {
          seatNo: 37,
          isReserved: false,
          isLadies: false,
        },
        {
          seatNo: 38,
          isReserved: true,
          isLadies: false,
        },
        {
          seatNo: 39,
          isReserved: true,
          isLadies: false,
        },
        {
          seatNo: 40,
          isReserved: true,
          isLadies: false,
        },
        {
          seatNo: 41,
          isReserved: false,
          isLadies: false,
        },
      ],
    ],
  }

      );
}

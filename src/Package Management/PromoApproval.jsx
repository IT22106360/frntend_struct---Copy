import React from "react";
import { Container, Row, Col, Table } from "reactstrap";
import { AiOutlineSearch, AiFillCalendar } from "react-icons/ai";
import bg from "../Images/package_bg.jpg";

const AddNewPromo = () => {
  const handleSubmit = () => {};

  const bgStyle = {
    backgroundImage: `url(${bg})`, 
    backgroundSize: "cover",
    height: "100vh",
  };

  return (

    
    <section>
      <Container>
        <div style={bgStyle}>
          <div className="flex h-full justify-center items-center ">
           
            <div className="bg-black/45 w-5/8 h-auto rounded-[50px] py-12 px-14 flex flex-col gap-y-8">
              <p className="text-4xl text-white font-bold align-top mb-8" style={{ WebkitTextStroke: '1px black' }}>Promo Package Approvals</p>
              <Row>
                <Col lg="12">
                    <div className="flex justify-between items-center">
                    <div>
                        <label htmlFor="from" className="text-2xl text-white font-bold align-top mb-15">From : </label>
                        <input
                        type="date"
                        id="from"
                        name="from"
                        className="bg-white/70 h-14 rounded-xl placeholder:text-black placeholder:font-semibold placeholder:text-lg pl-5 text-xl focus:outline-none focus:border-green-500"
                        required
                        />
                    </div>
                    <div>
                        <label htmlFor="to" className="text-2xl text-white font-bold align-top mb-15">To : </label>
                        
                        <input
                            type="date"
                            id="to"
                            name="to"
                            className="bg-white/70 h-14 rounded-xl placeholder:text-black placeholder:font-semibold placeholder:text-lg pl-5 text-xl focus:outline-none focus:border-green-500"
                            required
                        />
                        {/* <AiFillCalendar className="i" /> */}
                        
                    </div>
                    <div>
                        <label htmlFor="search" className="text-2xl text-white font-bold align-top mb-15">Search : </label>
                        
                        <input
                            type="text"
                            id="search"
                            name="search"
                            className="py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
                            placeholder="Search"
                            value=""
                        />
                        {/* <div className="pl-3">
                            <AiOutlineSearch className="text-gray-900 w-5 h-5 " />
                        
                        </div> */}
                    </div>
                    </div>
                </Col>
                </Row>

              <Row>
                <Table className="min-w-50% divide-y divide-gray-200">
                  <thead className="bg-blue-700 text-white">
                    <tr>
                      <th scope="col" className="px-3 py-3 text-left text-xs font-medium uppercase border border-black">
                        Date
                      </th>
                      <th scope="col" className="px-3 py-3 text-left text-xs font-medium uppercase border border-black">
                        Package ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase border border-black">
                        Package Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase border border-black">
                        Details
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase border border-black">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase border border-black">
                        Validity
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase border border-black">
                        Approve
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase border border-black">
                        Reject
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-blue-200 divide-y divide-gray-200">
                    <tr className="text-gray-700">
                      <td className="px-3 py-4 whitespace-nowrap border border-black">06/03/2023</td>
                      <td className="px-3 py-4 whitespace-nowrap border border-black">PROMO#123</td>
                      <td className="px-6 py-4 whitespace-nowrap border border-black">New Year Promo Package</td>
                      <td className="px-6 py-4 whitespace-nowrap border border-black">Weekday training sessions,<br />1 Kg supplement package included</td>
                      <td className="px-6 py-4 whitespace-nowrap border border-black">LKR 2500</td>
                      <td className="px-6 py-4 whitespace-nowrap border border-black">30/04/2023</td>
                      <td className="px-6 py-4 whitespace-nowrap border border-black">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Approve</button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap border border-black">
                        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Reject</button>
                      </td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </Table>
              </Row>
              <Row>
                <Col>
                  <button type="reset" className="bg-blue-500 py-3 px-8 rounded-lg text-lg font-bold hover:bg-blue-700 transition duration-300">
                    Generate Report
                  </button>
                </Col>
              </Row>
            </div>
          </div>
        </div>

        
      </Container>
    </section>
  );
};

export default AddNewPromo;
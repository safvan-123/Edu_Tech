import React, { Fragment, useRef } from "react";
// import { Table, Pagination } from "react-bootstrap";
import pic1 from "../../../images/profile/small/pic1.jpg";

import { Link, useLocation } from "react-router-dom";

const data = {
  data: [
    [
      pic1,
      "Hotel Byrd",
      "3 start",
      "Malappuram",
      "Kerala",
      "+912323233",
      "info@example.com",
      "2011/04/25",
      "",
    ],
    [
      pic1,
      "Hotel Byrd",
      "3 start",
      "Malappuram",
      "Kerala",
      "+912323233",
      "info@example.com",
      "2011/04/25",
      "",
    ],
    [
      pic1,
      "Hotel Byrd",
      "3 start",
      "Malappuram",
      "Kerala",
      "+912323233",
      "info@example.com",
      "2011/04/25",
      "",
    ],
  ],
  columns: [
    "",
    "Hotel Name",
    "Hotel Star",
    "Location",
    "State",
    "Mobile",
    "Email",
    "Created Date",
    "Action",
  ],
};

const ProfileDatatable = () => {
  const location = useLocation()
  const sort = 3;
  let paggination = Array(Math.ceil(data.data.length / sort))
    .fill()
    .map((_, i) => i + 1);

  const activePag = useRef(0);
  const jobData = useRef(
    data.data.slice(
      activePag.current * sort,
      (activePag.current + 1) * sort
    )
  );
  //const [demo, setdemo] = useState();
  const onClick = (i) => {
    activePag.current = i;

    jobData.current = data.data.slice(
      activePag.current * sort,
      (activePag.current + 1) * sort
    );
    /* setdemo(
      data.data.slice(
        activePag.current * sort,
        (activePag.current + 1) * sort
      )
    ); */
  };
  return (
    <div className="col-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Hotel List</h4>
        </div>
        <div className="card-body">
          <div className="w-100 table-responsive">
            <div id="example_wrapper" className="dataTables_wrapper">
              <table id="example" className="display w-100 dataTable">
                <thead>
                  <tr role="row">
                    {data.columns.map((d, i) => (
                      <th key={i}>{d}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {jobData.current.map((d, i) => (
                    <tr key={i}>
                      {d.map((da, i) => (
                        <Fragment key={i}>
                          <td>
                            {i === 0 ? (
                              <img
                                className="rounded-circle"
                                width="35"
                                src={da}
                                alt=""
                              />
                            ) : (
                              <Fragment>
                                {da}
                                {i === 8 && (
                                  <div className="d-flex">
                                    <Link
                                      to="#"
                                      className="btn btn-primary shadow btn-xs sharp me-1"
                                    >
                                      <i className="fas fa-pen"></i>
                                    </Link>
                                    <Link
                                      to="#"
                                      className="btn btn-danger shadow btn-xs sharp"
                                    >
                                      <i className="fa fa-trash"></i>
                                    </Link>
                                  </div>
                                )}
                              </Fragment>
                            )}
                          </td>
                        </Fragment>
                      ))}
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr role="row">
                    {data.columns.map((d, i) => (
                      <th key={i}>{d}</th>
                    ))}
                  </tr>
                </tfoot>
              </table>

              <div className="d-sm-flex text-center justify-content-between align-items-center mt-3">
                <div className="dataTables_info">
                  Showing {activePag.current * sort + 1} to{" "}
                  {data.length > (activePag.current + 1) * sort
                    ? (activePag.current + 1) * sort
                    : data.length}{" "}
                  of {data.length} entries
                </div>
                <div
                  className="dataTables_paginate paging_simple_numbers"
                  id="example5_paginate"
                >
                  <Link
                    className="paginate_button previous disabled"
                    to={location.pathname}
                    onClick={() =>
                      activePag.current > 0 && onClick(activePag.current - 1)
                    }
                  >
                    <i className="fa fa-angle-double-left" aria-hidden="true"></i>
                  </Link>
                  <span>
                    {paggination.map((number, i) => (
                      <Link
                        key={i}
                        to={location.pathname}

                        className={`paginate_button  ${activePag.current === i ? "current" : ""
                          } `}
                        onClick={() => onClick(i)}
                      >
                        {number}
                      </Link>
                    ))}
                  </span>
                  <Link
                    className="paginate_button next"
                    to={location.pathname}
                    onClick={() =>
                      activePag.current + 1 < paggination.length &&
                      onClick(activePag.current + 1)
                    }
                  >
                    <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDatatable;

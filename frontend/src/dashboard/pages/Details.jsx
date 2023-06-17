import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EditDeleteButton from "../components/EditDeleteButton";
import axios from "axios";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import lookup from "country-code-lookup";
import moment from "moment";

const Details = () => {
  const [id, setId] = useState(useParams().id);
  const [data, setData] = useState({});
  const [osStats, setOsStats] = useState([]);
  const [browserStats, setBrowserStats] = useState([]);
  const [countryStats, setCountryStats] = useState([]);
  const [clickStats, setClickStats] = useState([]);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const getClickStats = (arr) => {
    let newarr = arr.map((a) => {
      console.log(moment(a._id).utc().format("DD-MM-YYYY"));
      return { id: moment(a._id).utc().format("DD-MM-YYYY"), count: a.count };
    });
    setClickStats(newarr);
  };

  const getData = async () => {
    try {
      const res = await axios.get(`/links/details/${id}`);
      setData(res.data.data);
      setBrowserStats(res.data.data.browserStats);
      setOsStats(res.data.data.osStats);
      setCountryStats(res.data.data.countryStats);
      console.log(res.data.data);
      getClickStats(res.data.data.clickStats);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);

  const countryList = countryStats.map((country, key) => {
    const obj = lookup.byCountry(country._id);

    return (
      <div key={key} className="grid grid-cols-6 mt-4">
        <div className="flex col-span-4">
          <img
            src={
              obj
                ? `https://flagcdn.com/${obj.iso2.toLowerCase()}.svg`
                : "https://flagcdn.com/in.svg"
            }
            width="30"
            alt={country._id}
          />
          <span className="ml-6">{country._id}</span>
        </div>
        <div className="col-span-2"> {country.count}</div>
      </div>
    );
  });

  return (
    <div className="mr-2">
      <div className=" border-2 rounded-lg mt-4 pl-4">
        <div className="grid grid-cols-6">
          <div className="col-span-5 text-4xl font-semibold p-2">
            {data.title}
          </div>
          <div className="col-span-1">
            <EditDeleteButton type="links" key={id} id={id} />
          </div>
        </div>
        <div className="grid grid-cols-2 mt-4 p-2">
          <div className="col-span-1">
            <div className="grid grid-cols-6 my-4">
              <div className="col-span-2 text-lg font-semibold">
                Short Url :
              </div>
              <div className="col-span-4 text-lg ">{data.key}</div>
            </div>
            <div className="grid grid-cols-6 my-4">
              <div className="col-span-2 text-lg font-semibold">
                Destination :
              </div>
              <div className="col-span-4 text-lg ">{data.url}</div>
            </div>
            <div className="grid grid-cols-6 my-4">
              <div className="col-span-2 text-lg font-semibold">Date :</div>
              <div className="col-span-4 text-lg ">NO DATE NOW</div>
            </div>
            <div className="grid grid-cols-6 my-4">
              <div className="col-span-2 text-lg font-semibold">
                No. of Clicks :
              </div>
              <div className="col-span-4 text-lg ">{data.hitCount}</div>
            </div>
            <div className="grid grid-cols-6 my-4">
              <div className="col-span-2 text-lg font-semibold">Qr Code:</div>
              <img
                src="https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Freact.dev%2F&chs=180x180&choe=UTF-8&chld=L|2"
                alt="QR"
                className="w-24 h-24 col-span-4 text-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-4 gap-y-4 ">
        <div className="col-span-1 border-2 rounded-lg pt-4 mr-2  min-h-72 max-h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={clickStats}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="id" />
              <YAxis dataKey="count" />
              <Tooltip />
              <Bar dataKey="count" fill="#8884d8" maxBarSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="col-span-1 border-2 rounded-lg mx-2 h-72 overflow-auto pl-8">
          {countryList}
        </div>

        <div className="col-span-1 border-2 rounded-lg pt-4 mr-2 h-72">
          <ResponsiveContainer>
            <PieChart width={400} height={400}>
              <Pie
                data={browserStats}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
                nameKey="_id"
              >
                {browserStats.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="col-span-1 border-2 rounded-lg pt-4 ml-2 h-72">
          <ResponsiveContainer>
            <PieChart width={400} height={400}>
              <Pie
                data={osStats}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
                nameKey="_id"
              >
                {osStats.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Details;

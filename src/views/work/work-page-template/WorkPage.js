import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../Work.json";

import "./WorkPage.css";
import TemplateCard from "../../../components/template-card/TemplateCard";
import BasicModal from "../../../components/model/Modal";

export default function WorkPage() {
  let { name } = useParams();

  const [workList, setWorkList] = useState([...data?.done, ...data?.progress]);
  const [item, setItem] = useState();

  const [openModalVal, setOpenModalVal] = useState(false);
  const [featureItem, setFeatureItem] = useState({});

  useEffect(() => {
    for (let i = 0; i < workList.length; i++) {
      if (workList[i].name.toLowerCase() === name.toLowerCase()) {
        setItem(workList[i]);
      }
    }
  }, []);

  // go on top function
  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

  const handleOpenModalVal = () => {
    setOpenModalVal(!openModalVal);
    if (!openModalVal) setFeatureItem({});
  };

  return (
    <div className="work-page">
      <div className="work-title margin-btn-80">
        <h1>{name}.</h1>
      </div>

      <div className="grid-wrap flex-center">
        <div className="work-page-info ww text-max-width">
          <div className="work-page-item">
            <div className="timeline">
              <h3>Timeline</h3>
              <p>{item?.timeline}</p>
            </div>
          </div>
          <div className="work-page-item">
            <h3>Team</h3>
            <div className="team">
              {item?.team?.map((el, pos) => (
                <div key={pos + "m"} className="avatar">
                  {el.charAt(0)}
                </div>
              ))}
            </div>
          </div>

          <div className="work-page-item">
            <h3>Role</h3>

            <p className="work-page-item-desc">{item?.role}</p>
          </div>
        </div>
      </div>

      <div className="image">
        <img src={item?.first_img} alt="" />
      </div>

      <div className="grid-wrap flex-center">
        <div className="text-max-width space inner_widht">
          <div className="about-title2">
            <h1>Overview.</h1>
          </div>
          <p>{item?.overview}</p>
        </div>
      </div>

      <div className="image">
        <img src="https://source.unsplash.com/random" alt="" />
      </div>

      {/* {item?.overview && (
        <div className="grid-wrap flex-center">
          <div className="text-max-width space">
            <div className="about-title2">
              <h1>Overview.</h1>
            </div>
            <p>{item?.overview}</p>
          </div>
        </div>
      )} */}

      {item?.feature && (
        <>
          <div className="grid-wrap flex-center">
            <div className="text-max-width space">
              <div className="about-title2">
                <h1>Features.</h1>
              </div>
            </div>
          </div>

          <div className="grid-wrap flex-center">
            <div className="about-skill ww">
              {item.feature.map((el, pos) => (
                // <div className="point-item">
                //   {/* <div>01</div> */}
                //   <h3>Make it</h3>
                //   <p>
                //     I sketch wireframes and make prototypes. Talking through
                //     tactile designs existing in the browser is worth its weight.
                //     Design tools only carry you so far; the rest should be
                //     realized with a link my team can rally around.
                //   </p>
                // </div>

                <div onClick={() => setFeatureItem()}>
                  <TemplateCard key={pos + "s"} title={el.name} img={el?.img} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <BasicModal
        title={featureItem?.name}
        desc={featureItem?.desc}
        img={featureItem?.img}
        state={openModalVal}
        openFunction={handleOpenModalVal}
      />
    </div>
  );
}

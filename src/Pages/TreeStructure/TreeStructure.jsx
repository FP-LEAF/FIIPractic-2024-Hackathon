import React, { useEffect, useState } from "react";
import OrgChart from "./assets/orgchart-webcomponents.js";

import { successNotify } from "../../Components/Alerts/success";
import { unexpectedError, handleApiErrors } from "../../Components/Alerts/errors";


import api from "../../api";

import "./assets/orgchart-webcomponents.css";

const _getStructure = (data = []) => {

    let dataSource = {};

    let getChildren = item => {
        let child = data.find(el => el.rid === item);
        let children = child.in.map(i => getChildren(i));

        let arrOfChildren = {
            name: child.name,
            title: child.username
        };
        if (children.length > 0) {
            arrOfChildren.children = children;
        }
        return arrOfChildren;
    };

    dataSource = {
        name: data[0].name,
        title: data[0].username,
        className: "top-level",
        children: data[0].in.map(i => getChildren(i))
    };

    return dataSource;
};

const TreeStructure = ({ }) => {
    const [data, setData] = useState([]);

    const _updateRelationship = async (user, parent) => {
        try {
            console.log(user, parent);
            const { data } = await api.put("/organization", { user, parent });
            successNotify("Organigrama a fost modificata");
        } catch (error) {
            handleApiErrors(error);
        }
    };

    useEffect(() => {
        let orgchart = null;

        const fetchHierarchy = async () => {
            try {
                const { data } = await api.get("/organization");
                console.log(data)
                setData(data);
                orgchart = new OrgChart({
                    data: _getStructure(data),
                    nodeContent: "title",
                    toggleSiblingsResp: true,
                    // draggable: false
                    draggable: true
                });

                orgchart.addEventListener("nodedropped.orgchart", event => {
                    const draggedItem = JSON.parse(
                        event.detail.draggedNode.getAttribute("data-source")
                    );

                    const onDroppedItem = JSON.parse(
                        event.detail.dropZone.getAttribute("data-source")
                    );

                    _updateRelationship(draggedItem, onDroppedItem);
                });

                document.querySelector("#org").appendChild(orgchart);

            } catch (error) {
                console.log(error);
                unexpectedError(error);
            }
        };

        fetchHierarchy();

        return function () {
            document.querySelector("#org").removeChild(orgchart);


        };
    }, []);

    return <div id="org" style={{ width: "100%" }} />;
};

export default TreeStructure



import { useState } from "react";
import { listAnh } from "./data";
import css from "./chuyenmau.module.css";

export function ChuyenDoiMau() {
   
    const [alistAnh, setListAnh] = useState(listAnh[0]);

    return (
        <>
           
            <div className={css.listAnhbtn}>
                <img src={alistAnh.url} width={300} alt={listAnh.name} />
                <p>Desc: {alistAnh.desc}</p>
                <p>Name: {alistAnh.name}</p>
            </div>

          
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>URL</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   
                    {listAnh.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>
                                <img
                                    src={item.url}
                                    alt={item.name}
                                    width={50}
                                    style={{ cursor: "pointer" }}
                                    onClick={() => setListAnh(item)} 
                                />
                            </td>
                            <td>
                                <button
                                    onClick={() => {
                                        setListAnh(item);
                                    }}
                                >
                                    Select
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}



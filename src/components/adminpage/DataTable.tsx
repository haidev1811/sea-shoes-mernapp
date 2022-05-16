import React from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch } from "react-redux";
import { deleteBrand } from "../../redux/actions/product/brand.action";
import { deleteCategory } from "../../redux/actions/product/category.action";

interface Props {
  title: String;
  type: String;
  columns: any;
  rows: any;
  reload: any;
  setReload: any;
}

const DataTable = ({
  title,
  type,
  columns,
  rows,
  reload,
  setReload,
}: Props) => {
  const dispatch = useDispatch();

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params: any) => {
        return (
          <div className="cellAction">
            <Link
              to={`/admin/${type}/${params.row._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">Chi tiết</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Xóa
            </div>
          </div>
        );
      },
    },
  ];

  const handleDelete = async (id: string) => {
    switch (type) {
      case "brand":
        await dispatch(deleteBrand(id));
        break;
      case "category":
        await dispatch(deleteCategory(id));
        break;
      default:
        break;
    }
    setReload(!reload);
  };

  return (
    <div className="datatable">
      <div className="datatableTitle">
        {title}
        {type === "user" || type === "order" ? (
          <></>
        ) : (
          <Link to={`/admin/${type}/add`} className="link">
            Thêm mới
          </Link>
        )}
      </div>
      <DataGrid
        className="datagrid"
        getRowId={(row) => row._id}
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;

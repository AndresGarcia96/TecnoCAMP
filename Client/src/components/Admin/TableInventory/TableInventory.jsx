import { useSelector, useDispatch } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Modal } from "antd";
import { useRef, useState, useEffect } from "react";
import Highlighter from "react-highlight-words";
import { getAllProducts } from "../../../Redux/Features/admin/products/adminProductsSlice";

function TableInventory() {
  const dispatch = useDispatch();
  const token = window.localStorage.getItem("token");
  const allProducts = useSelector((state) => state.adminProducts.allProducts);

  useEffect(() => {
    dispatch(getAllProducts(token));
  }, [dispatch]);

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: "Photo",
      dataIndex: "photo",
      render: (photo) => (
        <>
          {" "}
          <img
            style={{ maxHeight: "10vh", width: "5vw", borderRadius: "10%" }}
            src={photo}
          />{" "}
        </>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "key",
      width: "30%",
      ...getColumnSearchProps("name"),
      sorter: (c, d) => c.name.length - d.name.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Stock",
      dataIndex: "total_quantity_inventory",
      key: "key",
      ...getColumnSearchProps("total_quantity_inventory"),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "key",
      width: "20%",
      ...getColumnSearchProps("category"),
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "key",
      ...getColumnSearchProps("brand"),
      sorter: (a, b) => a.brand.length - b.brand.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Acciones",
      dataIndex: "acciones",
      render: (fila) => (
        <>
          {" "}
          <a href="editinventary">
            <Button type="primary">Editar</Button>
          </a>{" "}
          {"  "}{" "}
          <Button type="primary" danger>
            Eliminar
          </Button>{" "}
        </>
      ),
    },
    {
      title: "Stock",
      dataIndex: "total_quantity_inventory",
      key: "key",
    },
  ];

  const data =
    allProducts &&
    allProducts.map((c) => {
      return {
        key: c.id,
        photo: c.photo,
        name: c.name,
        total_quantity_inventory: c.total_quantity_inventory,
        category: c.category.name,
        brand: c.brand.name,
        color: c.inventories.map((d) => {
          return {
            color: d.color,
            quantity_inventory: d.quantity_inventory,
          };
        }),
      };
    });

  console.log("SOY TODO PA", allProducts);
  console.log("soy mapeo", data);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}

export default TableInventory;

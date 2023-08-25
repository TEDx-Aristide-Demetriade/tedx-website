import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Button,
  Form,
  Input,
  Popconfirm,
  Table,
  Select,
  Space,
  Modal,
  Spin,
} from "antd";
import {
  CheckOutlined,
  CloseOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../store/AppContext";
import { createTickets, getDeletedTickets, addTicket } from "../../api/product";
import {
  getAllProducts,
  deleteTicket,
  deleteAll,
  getOrderedTickets,
  getRemainTickets,
  deletePendingData,
} from "../../api/products";

const EditableContext = React.createContext(null);
const { Option } = Select;
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);
  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };
  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({
        ...record,
        ...values,
      });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };
  let childNode = children;
  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};

function AdminDashboard() {
  const navigation = useNavigate();
  const { authToken, events, setEvents } = useContext(AppContext);
  console.log(events);

  const [show, setShow] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [count, setCount] = useState(2);
  const [delticketlist, setDelTicketList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreatedAll, SetCreatedAll] = useState(false);
  const [deletePossibleAll, setDeletePossibleAll] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (!authToken) {
      navigation(-1);
    }
  }, [authToken, navigation]);

  const [options, setOptions] = useState([]);

  const showModal = async () => {
    setIsModalOpen(true);
    const initOption = [];
    setOptions(initOption);
    await getDeletedTickets()
      .then(async (res) => {
        options.length = 0;
        await res.map((item) => {
          options.push({
            label: item.key_id,
            value: item.key_id,
          });
        });
        setOptions([...options]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const selectProps = {
    mode: "multiple",
    style: {
      width: "100%",
    },
    delticketlist,
    options,
    onChange: (newValue) => {
      setDelTicketList(newValue);
    },
    placeholder: "Select Item...",
    maxTagCount: "responsive",
  };

  const handleOk = () => {
    handleAddDeletedTicket(delticketlist);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const defaultColumns = [
    {
      title: "Numar",
      dataIndex: "key_id",
    },
    {
      title: "Prenume",
      dataIndex: "first_name",
    },
    {
      title: "Nume",
      dataIndex: "last_name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Varsta",
      dataIndex: "age",
    },
    {
      title: "Profesie",
      dataIndex: "profession",
    },
    {
      title: "Companie",
      dataIndex: "company",
    },
    {
      title: "Bilet Id",
      dataIndex: "productId",
    },
    {
      title: "Pret Id",
      dataIndex: "priceId",
    },
    {
      title: "Status",
      dataIndex: "state",
    },
    {
      title: "Cumparat",
      dataIndex: "ordered",
      render: (_, record) =>
        record.ordered ? (
          <CheckOutlined style={{ color: "green" }} />
        ) : (
          <CloseOutlined style={{ color: "red" }} />
        ),
    },
    {
      title: "Operatie",
      dataIndex: "operation",
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            title="Sigur vrei sa stergi?"
            onConfirm={() => handleDelete(record.key_id)}
            icon={
              <QuestionCircleOutlined
                style={{
                  color: "red",
                }}
              />
            }
          >
            <a style={{ color: "red" }}>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];

  const handleDelete = async (key) => {
    await deleteTicket(key)
      .then((res) => {
        getAllProducts()
          .then((res) => {
            setDataSource(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddDeletedTicket = async (ids) => {
    await addTicket(ids)
      .then(() => {
        getAllProducts()
          .then((res) => {
            setDataSource(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddAll = () => {
    setLoading(true);
    SetCreatedAll(true);
    createTickets()
      .then(() => {
        getAllProducts()
          .then((res) => {
            setDataSource(res.data);
            console.log(res.data);
            setLoading(false);
            setDeletePossibleAll(true);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: "32",
      address: `London, Park Lane no. ${count}`,
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };

  const handleDeleteAll = () => {
    deleteAll()
      .then(() => {
        getAllProducts()
          .then(() => {
            setDataSource([]);
            setDeletePossibleAll(false);
            SetCreatedAll(false);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
    return;
  };

  const handleGetAllTickets = async () => {
    await getAllProducts()
      .then((res) => {
        console.log(res.data);
        setDataSource(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGetOrderedTickets = async () => {
    await getOrderedTickets()
      .then((res) => {
        setDataSource(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGetRemainTickets = async () => {
    await getRemainTickets()
      .then((res) => {
        setDataSource(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return;
  };
  useEffect(() => {
    console.log(authToken);
    if (authToken) {
      fethcAlldata();
    }
  }, [authToken]);

  const fethcAlldata = async () => {
    try {
      let res = await getAllProducts();

      setDataSource(res.data);
      if (res.data.length > 0) {
        SetCreatedAll(true);
        setDeletePossibleAll(true);
      }
    } catch {
      setDataSource([]);
    }
  };
  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const columns = defaultColumns.map((col, index) => {
    if (!col.editable) {
      return col;
    }
    return {
      key: index,
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        key: index,
        handleSave,
      }),
    };
  });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Button
            onClick={handleAddAll}
            type="primary"
            disabled={isCreatedAll}
            style={{
              marginBottom: 16,
              marginLeft: 4,
              marginRight: 2,
              marginTop: 4,
            }}
          >
            Creeaza TOATE Biletele
          </Button>
          <Button
            onClick={showModal}
            type="primary"
            disabled={loading}
            style={{
              marginBottom: 16,
              marginLeft: 2,
              marginRight: 2,
              marginTop: 4,
            }}
          >
            Adauga Bilete
          </Button>
          <Button
            onClick={handleGetAllTickets}
            type="primary"
            disabled={loading}
            style={{
              marginBottom: 16,
              marginLeft: 2,
              marginRight: 2,
              marginTop: 4,
            }}
          >
            Toate Biletele
          </Button>
          <Button
            onClick={handleGetOrderedTickets}
            type="primary"
            disabled={loading}
            style={{
              marginBottom: 16,
              marginLeft: 2,
              marginRight: 2,
              marginTop: 4,
            }}
          >
            Bilete Comandate
          </Button>
          <Button
            onClick={handleGetRemainTickets}
            type="primary"
            disabled={loading}
            style={{
              marginBottom: 16,
              marginLeft: 2,
              marginRight: 2,
              marginTop: 4,
            }}
          >
            Bilete Ramase
          </Button>
        </div>
        <div>
          <Popconfirm
            title="Sigur vrei sa stergi?"
            onConfirm={() => handleDeleteAll()}
            disabled={!isCreatedAll}
            icon={
              <QuestionCircleOutlined
                style={{
                  color: "red",
                }}
              />
            }
          >
            <Button
              disabled={!deletePossibleAll}
              type="primary"
              danger
              style={{
                marginBottom: 16,
                marginLeft: 2,
                marginRight: 24,
                marginTop: 4,
              }}
            >
              Sterge TOT
            </Button>
          </Popconfirm>
        </div>
      </div>
      {loading ? (
        <div
          style={{
            width: "100%",
            height: "calc(100vh - 364.8px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin
            tip="Se incarca..."
            spinning={loading}
            size="large"
            style={{ width: "100%" }}
          ></Spin>
        </div>
      ) : (
        <div>
          <Table
            components={components}
            rowClassName={() => "editable-row"}
            bordered
            dataSource={dataSource}
            columns={columns}
          />
          <Modal
            title="Model de baza"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Space
              direction="vertical"
              style={{
                width: "100%",
              }}
            >
              <Select {...selectProps}></Select>
            </Space>
          </Modal>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;

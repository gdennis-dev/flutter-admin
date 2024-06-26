import React, { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import TaskContext from "../../context/TaskContext";
import TokenContext from "../../context/TokenContext";
import axios from "../../Axios/axios.js";
import "./createTask.css";

function CreateTask() {
  const { dispatch } = useContext(TaskContext);
  const { userToken } = useContext(TokenContext);
  const [subCategory, setSubCategory] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [question, setQuestion] = useState("");
  const [answerA, setAnswerA] = useState("");
  const [answerB, setAnswerB] = useState("");
  const [answerC, setAnswerC] = useState("");
  const [answerD, setAnswerD] = useState("");
  const [refData, setRefData] = useState("");
  const [imgQData, setImgQData] = useState(null);
  const [imgAData, setImgAData] = useState(null);
  const [imgBData, setImgBData] = useState(null);
  const [imgCData, setImgCData] = useState(null);
  const [imgDData, setImgDData] = useState(null);
  const [imgRData, setImgRData] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [realId, setRealId] = useState("");

  const { reset } = useForm();

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "/task/addTask",
        {
          subCategory,
          subHeading,
          question,
          answerA,
          answerB,
          answerC,
          answerD,
          refData,
          correctAnswer,
          imgAData,
          imgBData,
          imgCData,
          imgDData,
          imgQData,
          imgRData,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      setRealId(res);
      // showToast();
    } catch (error) {
      console.log(error);
    }
    dispatch({
      type: "ADD_TASK",
      subCategory,
      subHeading,
      question,
      realId,
    });

    setSubHeading("");
    setQuestion("");
    setAnswerA("");
    setAnswerB("");
    setAnswerC("");
    setAnswerD("");
    setRefData("");
    setCorrectAnswer("");
    // reset();
  };

  const handleImageAChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = () => {
        const img = new Image();
        img.src = reader.result;
        img.onload = () => {
          setImgAData(img.src);
        };
        img.onerror = () => {
          console.error("The file could not be read as an image.");
        };
      };

      reader.readAsDataURL(file);
    } else {
      console.error("Please upload a valid image file.");
    }
  };

  const handleImageBChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = () => {
        const img = new Image();
        img.src = reader.result;

        img.onload = () => {
          setImgBData(reader.result);
        };
        img.onerror = () => {
          console.error("The file could not be read as an image.");
        };
      };

      reader.readAsDataURL(file);
    } else {
      console.error("Please upload a valid image file.");
    }
  };

  const handleImageCChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = () => {
        const img = new Image();
        img.src = reader.result;

        img.onload = () => {
          setImgCData(reader.result);
        };
        img.onerror = () => {
          console.error("The file could not be read as an image.");
        };
      };

      reader.readAsDataURL(file);
    } else {
      console.error("Please upload a valid image file.");
    }
  };

  const handleImageDChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = () => {
        const img = new Image();
        img.src = reader.result;

        img.onload = () => {
          setImgDData(reader.result);
        };
        img.onerror = () => {
          console.error("The file could not be read as an image.");
        };
      };

      reader.readAsDataURL(file);
    } else {
      console.error("Please upload a valid image file.");
    }
  };

  const handleImageQChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = () => {
        const img = new Image();
        img.src = reader.result;

        img.onload = () => {
          setImgQData(reader.result);
        };
        img.onerror = () => {
          console.error("The file could not be read as an image.");
        };
      };

      reader.readAsDataURL(file);
    } else {
      console.error("Please upload a valid image file.");
    }
  };

  const handleImageRChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = () => {
        const img = new Image();
        img.src = reader.result;

        img.onload = () => {
          setImgRData(reader.result);
        };
        img.onerror = () => {
          console.error("The file could not be read as an image.");
        };
      };

      reader.readAsDataURL(file);
    } else {
      console.error("Please upload a valid image file.");
    }
  };

  const handleCategoryChange = (e) => {
    setSubCategory(e.target.value);
  };

  // const showToast = () => {
  //     const toast = document.getElementById('toast');
  //     toast.style.display = "block"
  //     setTimeout(hideToast,2000)
  // }
  // const hideToast = () => {
  //     const toast = document.getElementById('toast');
  //     toast.style.display = "none"
  // }

  return (
    <div className="addContainer md:w-2/3 md:mx-auto mx-3 mt-3 flex justify-center">
      <div className="w-11/12">
        <form onSubmit={handleAdd}>
          <div>
            <label htmlFor="title">Question Category</label>
            <select
              id="subCategory"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3"
              onChange={handleCategoryChange}
              value={subCategory}
            >
              <option selected>Choose a Category</option>
              <option value="PPL">PPL</option>
              <option value="POF">POF</option>
              <option value="IR">IR</option>
              <option value="FR">FR</option>
            </select>
          </div>
          <div>
            <label htmlFor="title">QuestionTitle</label>
            <input
              type="text"
              name="subHeading"
              id="subHeading"
              value={subHeading}
              required
              onChange={(e) => setSubHeading(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="my-3">
            <label htmlFor="question">Question</label>
            <textarea
              rows={3}
              name="question"
              id="question"
              value={question}
              required
              onChange={(e) => setQuestion(e.target.value)}
              style={{ resize: "none" }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageQChange}
              className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary my-3"
            />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="md:w-1/2 md:mx-auto pr-3">
              <label htmlFor="title">Answer A</label>
              <input
                type="text"
                name="answerA"
                id="answerA"
                value={answerA}
                required
                onChange={(e) => setAnswerA(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageAChange}
                className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary my-3"
              />
            </div>
            <div className="md:w-1/2 md:mx-auto pl-3">
              <label htmlFor="title">Answer B</label>
              <input
                type="text"
                name="answerB"
                id="answerB"
                value={answerB}
                required
                onChange={(e) => setAnswerB(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageBChange}
                className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary my-3"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="md:w-1/2 md:mx-auto pr-3">
              <label htmlFor="title">Answer C</label>
              <input
                type="text"
                name="answerC"
                id="answerC"
                value={answerC}
                required
                onChange={(e) => setAnswerC(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageCChange}
                className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary my-3"
              />
            </div>
            <div className="md:w-1/2 md:mx-auto pl-3">
              <label htmlFor="title">Answer D</label>
              <input
                type="text"
                name="answerD"
                id="answerD"
                value={answerD}
                required
                onChange={(e) => setAnswerD(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageDChange}
                className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary my-3"
              />
            </div>
          </div>

          <div>
            <label htmlFor="title">Reference Data</label>
            <input
              type="text"
              name="refData"
              id="refData"
              value={refData}
              required
              onChange={(e) => setRefData(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageRChange}
              className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary my-3"
            />
          </div>
          <div>
            <label htmlFor="title">Correct Answer</label>
            <input
              type="text"
              name="correctAnswer"
              id="correctAnswer"
              value={correctAnswer}
              required
              onChange={(e) => setCorrectAnswer(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-24 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className=" bg-blue-700 rounded-md text-white px-5 py-3 w-36 font-bold text-lg"
            >
              Add
            </button>
          </div>
        </form>
        <div
          className="toast bg-green-600 text-white p-3 rounded-xl shadow-2xl text-center absolute bottom-4 left-1/2 -translate-x-1/2"
          id="toast"
        >
          <p>This is test</p>
        </div>
      </div>
    </div>
  );
}

export default CreateTask;

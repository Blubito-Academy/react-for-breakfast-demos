import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./App.css";

const fileReader = new FileReader();

function App() {
  const [file, setFile] = useState<File | undefined>(undefined);
  const [previewImg, setPreviewImg] = useState<any>(null);

  const onDrop = useCallback((acceptedFiles: any) => {
    const targetFileType = acceptedFiles[0].type;

    fileReader.onload = function () {
      if (targetFileType === "image/png" || targetFileType === "image/jpeg") {
        setPreviewImg(fileReader.result);
      } else {
        setPreviewImg(null);
      }
    };

    fileReader.readAsDataURL(acceptedFiles[0]);

    setFile(acceptedFiles[0]);

    // Handle csv files
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };
    const targetFileSize = target.files[0]?.size;
    const targetFileType = target.files[0]?.type;

    if (targetFileSize > 1 * 1000 * 1024) {
      console.log("File with maximum size of 1MB is allowed");
      return;
    }

    if (targetFileType === "image/png" || targetFileType === "image/jpeg") {
      fileReader.onload = function () {
        setPreviewImg(fileReader.result);
      };

      fileReader.readAsDataURL(target.files[0]);

      setFile(target.files[0]);
    }

    if (targetFileType === "text/csv") {
      setPreviewImg(null);

      // Handle csv files
    }
  };

  const handleUpload = () => {
    if (!file) {
      return;
    }

    const formData = new FormData();

    formData.append("file", file);

    // Make a POST request to upload the file
  };

  return (
    <>
      <section className="padding">
        <h1>Uploading of files</h1>
        <input
          className="input"
          type="file"
          onChange={handleOnChange}
          // accept="image/*"
          // multiple
        />
      </section>

      <h2>Uploading of files with react-dropzone</h2>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>

      <div className="padding">
        <button onClick={handleUpload}>Upload</button>
      </div>

      {previewImg && <img className="preview" src={previewImg} />}
    </>
  );
}

export default App;

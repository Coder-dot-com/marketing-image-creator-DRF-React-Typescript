import React, { useEffect, useState } from "react";
import axios from "axios";

const SavedImages: React.FC = () => {
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      const token = localStorage.getItem("access");
      if (!token) return;

      try {
        const res = await axios.get("/api/images/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setImages(res.data);
      } catch (err: any) {
        if (err.response?.status === 401) {
          const refreshToken = localStorage.getItem("refresh");
          if (!refreshToken) {
            window.location.href = "/login";
            return;
          }

          try {
            const refreshRes = await axios.post("/api/token/refresh/", {
              refresh: refreshToken,
            });
            localStorage.setItem("access", refreshRes.data.access);

            const retryRes = await axios.get("/api/images/", {
              headers: { Authorization: `Bearer ${refreshRes.data.access}` },
            });
            setImages(retryRes.data);
          } catch {
            localStorage.removeItem("access");
            localStorage.removeItem("refresh");
            window.location.href = "/login";
          }
        } else {
          console.error(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Saved Images</h2>
      {loading && <p>Loading...</p>}
      {!loading && images.length === 0 && <p>You have no saved images yet.</p>}
      <div className="row">
        {images.map((img) => (
          <div className="col-6 col-md-4 col-lg-3 mb-3" key={img.id}>
            <div className="card shadow-sm">
              <img
                src={img.final_image}
                alt="Saved"
                className="card-img-top"
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-body text-center">
                <a
                  href={img.final_image}
                  download
                  className="btn btn-sm btn-primary"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedImages;

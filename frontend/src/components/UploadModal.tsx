import { motion } from "framer-motion"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


type UploadModalProps = {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export default function UploadModal({ isOpen, onClose, onSuccess }: UploadModalProps) {
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
  
    if (!isOpen) return null
  

  async function handleUpload() {
    if (!selectedFile) return
  
    const formData = new FormData()
    formData.append("file", selectedFile)
  
    try {
      const res = await fetch("http://localhost:3000/api/upload-csv", {
        method: "POST",
        body: formData,
      })
  
      if (!res.ok) {
        const errorText = await res.text() // Log the full error response
        console.error("Upload failed:", errorText)
        throw new Error(`Upload failed: ${errorText}`)
      }
  
      const data = await res.json()
      console.log("Backend response:", data)
  
      // Store data in sessionStorage
      sessionStorage.setItem("financeWrappedData", JSON.stringify(data))
  
      // Call the onSuccess callback
      onSuccess()
    } catch (err) {
      console.error("Upload error:", err)
      alert(err.message || "Something went wrong while uploading")
    }
  }
  
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      />

      {/* MODAL */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative z-50 w-[90%] max-w-lg rounded-3xl bg-[#020617] border border-white/10 p-8 text-white"
      >
        <h2 className="text-2xl font-bold mb-2">
          Upload your bank CSV
        </h2>

        <p className="text-white/60 mb-6">
          We turn boring transactions into a story you’ll actually enjoy.
        </p>

        {/* DROP ZONE (UI only for now) */}
        <label
        htmlFor="csv-upload"
        className="block cursor-pointer border-2 border-dashed border-white/20 rounded-2xl p-8 text-center hover:border-green-400 transition"
        >
        <input
        id="csv-upload"
        type="file"
        accept=".csv"
        className="hidden"
        onChange={(e) => {
            const file = e.target.files?.[0]
            if (file) {
            setSelectedFile(file)
            }
        }}
        />

        {selectedFile ? (
        <p className="mt-2 text-green-400 text-sm">
            Selected: {selectedFile.name}
        </p>
        ) : (
        <>
            <p className="text-white/70">Drag & drop your CSV here</p>
            <p className="text-sm text-white/40 mt-1">or click to browse</p>
        </>
)}

        </label>

        <button
        onClick={handleUpload}
        disabled={!selectedFile}
        className="mt-6 w-full rounded-full bg-green-500 py-3 font-semibold text-black hover:scale-105 transition disabled:opacity-50"
        >
        Generate My Finance Wrapped
        </button>
      </motion.div>
    </div>
  )
}



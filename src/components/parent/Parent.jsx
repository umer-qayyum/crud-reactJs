import React, { useState } from 'react';
import Child from '../child/Child';

function Parent() {
  const [formData, setFormData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleEdit = (index) => {
    const editedEntry = formData[index];
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const newFormData = formData.filter((_, i) => i !== index);
    setFormData(newFormData);
  };

  const handleSubmit = (newEntry) => {
    if (editIndex !== null) {
      // Editing an existing entry
      const newFormData = [...formData];
      newFormData[editIndex] = newEntry;
      setFormData(newFormData);
      setEditIndex(null);
    } else {
      // Adding a new entry
      setFormData([...formData, newEntry]);
    }
  };

  return (
    <div>
      <Child
        formData={formData}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onSubmit={handleSubmit}
        editIndex={editIndex}
      />
    </div>
  );
}

export default Parent;

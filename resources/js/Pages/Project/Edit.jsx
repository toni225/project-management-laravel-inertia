import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import TextAreaInput from "@/Components/TextAreaInput";
import SelectInput from "@/Components/SelectInput";

import { Link, Head, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";

export default function Edit({ auth, project }) {
    
    const { data, setData, post, errors } = useForm({
        image: "",
        name: project.name || "", 
        status: project.status || "", 
        description: project.description || "", 
        due_date: project.due_date || "",
        _method: "PUT"
    });

    const onSubmitForm = (e) => {
        e.preventDefault();

        post(route("project.update",project.id));
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Edit project "{project.name}"</h2>
                    <Link
                        href={route("project.index")}
                        className="bg-rose-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-rose-600">
                        Cancel
                    </Link>
                </div>
            }
        >
            <Head title="Edit" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <form onSubmit={onSubmitForm} className="p-4 sm:-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg" action="">
                            {project.image_path && 
                                <div className="mt-4">
                                    <img src={project.image_path} className="w-64"/>
                                </div>
                            }
                            <div className="mt-4">
                                <InputLabel htmlFor="project_image_path" value="Project Image" />
                                <TextInput id="project_image_path" type="file" name="image"
                                    className="mt-1 block w-full"
                                    onChange={e => setData('image', e.target.files[0])}
                                />
                                <InputError message={errors.image} className="mt-2"/>
                            </div>
                            <div className="mt-4">
                                <InputLabel htmlFor="project_name" value="Project Name" />
                                <TextInput id="project_name" type="text" name="name"
                                    value={data.name}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={e => setData('name', e.target.value)}
                                />
                                <InputError message={errors.name} className="mt-2"/>
                            </div>
                            <div className="mt-4">
                                <InputLabel htmlFor="project_description" value="Project Description" />
                                <TextAreaInput id="project_description" name="description"
                                    value={data.description}
                                    className="mt-1 block w-full"
                                    onChange={e => setData('description', e.target.value)}
                                />
                                <InputError message={errors.description} className="mt-2"/>
                            </div>
                            <div className="mt-4">
                                <InputLabel htmlFor="project_due_date" value="Project Deadline" />
                                <TextInput id="project_due_date" name="due_date"
                                    type="date"
                                    value={data.due_date}
                                    className="mt-1 block w-full"
                                    onChange={e => setData('due_date', e.target.value)}
                                />
                                <InputError message={errors.due_} className="mt-2"/>
                            </div>
                            <div className="mt-4">
                                <InputLabel htmlFor="project_status" value="Project Status" />
                                <SelectInput id="project_status" name="status" value={data.status}
                                    className="mt-1 block w-full"
                                    onChange={e => setData('status', e.target.value)}
                                >
                                    <option value="">Select Status</option>
                                    <option value="pending">Pending</option>
                                    <option value="in_progress">In Progress</option>
                                    <option value="completed">Completed</option>
                                </SelectInput>
                                <InputError message={errors.project_status} className="mt-2"/>
                            </div>
                            <div className="mt-4 text-right">
                                <Link className="bg-gray-100 py-2 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2 text-sm h-8"
                                    href={route("project.index")}>
                                    Cancel
                                </Link>
                                <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600 text-sm h-8">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
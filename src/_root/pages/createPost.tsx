
import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

const formSchema = z.object({
    username: z.string().min(2).max(50),
})

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {useRef} from "react";


const CreatePost = () => {
    const inputFileRef = useRef<HTMLInputElement | null>(null);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    const chooseFile = () => {
        if(inputFileRef.current){
            inputFileRef.current.click();
        }
    }

    return (
        <div className="w-screen h-screen">
            <div className="absolute pl-[350px] pr-[30px] border h-screen  w-screen overflow-auto">
                <div className="">
                    <h2 className="flex flex-row text-[30px] font-bold">
                        <img src="/assets/icons/bookmark.svg" alt="" height={20} width={20}/>
                        <span className="pl-[10px]">Create Post</span>
                    </h2>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />


                            <div className="flex flex-col">
                                <label>Add Photos</label>
                                <div className="">
                                    <input type="file" ref={inputFileRef} className="hidden" id="avatar" name="avatar" accept="image/png, image/jpeg"/>
                                    <div className="design border h-[400px] rounded-[15px] flex justify-center items-center" onClick={chooseFile}>
                                        <div className="flex flex-col items-center justify-center">
                                            <img src="/assets/icons/file-upload.svg" alt="" width={100} height={100}/>
                                            <div className="flex flex-col text-center mt-[20px]">
                                                <span className="">Drag photo here</span>
                                                <span className="text-[#333]">SVG, PNG, JPG</span>
                                            </div>
                                            <span className="bg-blue-950 px-[20px] py-[15px] mt-[20px] rounded-[10px] cursor-pointer">Select from computer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <FormField
                                control={form.control}
                                name="location"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Location</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Fès" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="tags"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Tags</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Flooz, Morroco, Dhiram" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="relative">
                                <div className="flex flex-row gap-[20px] absolute right-0">
                                    <Button className="p-[20px] bg-[#333]">Cancel</Button>
                                    <Button type="submit" className="p-[20px]">Create Post</Button>
                                </div>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
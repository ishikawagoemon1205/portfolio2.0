type BlogPost = {
    id: number;
    title: string;
    subtitle?: string;
    author?: string;
    date: {
        published: string;
        updated?: string;
    };
    content: {
        type: "sectionTitle" | "text" | "image" | "code" | "link" | "pageLink";
        data: string;
        alt?: string;
        language?: string; // for code type
    }[];
    tags: string[];
    categories: string[];
    technologies: string[];
    links: {
        title: string;
        url: string;
    }[];
    images?: {
        src: string;
        alt: string;
    }[];
    comments?: {
        user: string;
        comment: string;
        date: string;
    }[];
};

type BlogExample = Record<string, BlogPost>;


export const DBBlogData: BlogExample = {
    "post-1": {
      id: 1,
      title: "Sample Blog Post",
      subtitle: "This is the first blog post.",
      date: { published: "2024-11-19" },
      content: [
        { type: "sectionTitle", data: "Introduction" },
        { type: "text", data: "This is the first blog post." },
      ],
      tags: ["intro", "personal"],
      categories: ["Lifestyle"],
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [],
    },
    "post-2": {
      id: 1,
      title: "Sample Blog Post",
      subtitle: "This is the first blog post.",
      date: { published: "2024-11-19" },
      content: [
        { type: "sectionTitle", data: "Introduction" },
        { type: "text", data: "This is the first blog post." },
      ],
      tags: ["intro", "personal"],
      categories: ["Lifestyle"],
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [],
    },
    "post-3": {
      id: 1,
      title: "Sample Blog Post",
      subtitle: "This is the first blog post.",
      date: { published: "2024-11-19" },
      content: [
        { type: "sectionTitle", data: "Introduction" },
        { type: "text", data: "This is the first blog post." },
      ],
      tags: ["intro", "personal"],
      categories: ["Lifestyle"],
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [],
    },
    "post-4": {
      id: 1,
      title: "Sample Blog Post",
      subtitle: "This is the first blog post.",
      date: { published: "2024-11-19" },
      content: [
        { type: "sectionTitle", data: "Introduction" },
        { type: "text", data: "This is the first blog post." },
      ],
      tags: ["intro", "personal"],
      categories: ["Lifestyle"],
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [],
    },
    "post-5": {
      id: 1,
      title: "Sample Blog Post",
      subtitle: "This is the first blog post.",
      date: { published: "2024-11-19" },
      content: [
        { type: "sectionTitle", data: "Introduction" },
        { type: "text", data: "This is the first blog post." },
      ],
      tags: ["intro", "personal"],
      categories: ["Lifestyle"],
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [],
    },
    "post-6": {
      id: 1,
      title: "Sample Blog Post",
      subtitle: "This is the first blog post.",
      date: { published: "2024-11-19" },
      content: [
        { type: "sectionTitle", data: "Introduction" },
        { type: "text", data: "This is the first blog post." },
      ],
      tags: ["intro", "personal"],
      categories: ["Lifestyle"],
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [],
    },
};
  
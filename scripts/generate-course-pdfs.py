from pathlib import Path

from reportlab.lib.colors import HexColor, white
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf"
OUTPUT.mkdir(parents=True, exist_ok=True)

NAVY = HexColor("#0F172A")
BLUE = HexColor("#2457E6")
TEAL = HexColor("#0F8B8D")
PURPLE = HexColor("#7454D8")
INK = HexColor("#172033")
MUTED = HexColor("#5B6475")
PAPER = HexColor("#F5F7FB")
BORDER = HexColor("#D9DFEA")

PAGE_W, PAGE_H = A4
LEFT = 20 * mm
RIGHT = PAGE_W - 20 * mm


COURSES = [
    {
        "filename": "the-best-school-tech-product-management-with-ai-assistance-curriculum-en-2026-08-31.pdf",
        "title": "Tech Product Management with AI assistance",
        "category": "TECH PRODUCT MANAGEMENT",
        "accent": TEAL,
        "duration": "14 weeks full-time | 22 weeks part-time",
        "lead": "Build the judgment, discovery, delivery, analytics, technical, and launch skills needed to guide a technology product from opportunity to adoption.",
        "positioning": "Product management chooses which customer and business value to pursue. Project management organizes how a defined initiative is delivered. This course teaches the product decisions around the work while keeping delivery literacy in view.",
        "outcomes": [
            "Frame an opportunity and make explicit product strategy choices.",
            "Plan and synthesize customer research without outsourcing judgment to AI.",
            "Prototype, test, and revise product assumptions using evidence.",
            "Connect outcomes to roadmaps, backlogs, releases, and team decisions.",
            "Use product analytics and economic logic to guide investment.",
            "Collaborate credibly with engineering, data, security, and operations.",
            "Prepare launches and adoption loops, then communicate a complete product case.",
        ],
        "phases": [
            ("01", "Opportunity, Market and Product Strategy", "FT weeks 1-2 | PT weeks 1-3", "Turn a broad business opportunity into a focused product direction with explicit assumptions and measures of success.", ["Market and competitor analysis", "Customer value and product-market fit", "Product vision and strategic choices", "Outcome trees, KPIs, and OKRs"], "Opportunity brief, product vision, and strategy map."),
            ("02", "Discovery and User Research", "FT weeks 3-4 | PT weeks 4-6", "Develop a reliable view of user needs before a team commits to a solution.", ["Research planning and recruiting", "Interviews, observation, and surveys", "Jobs to be Done and journey mapping", "Product hypotheses and traceable evidence"], "Research plan, insight repository, journey map, and problem statement."),
            ("03", "Prototyping and Validation", "FT weeks 5-6 | PT weeks 7-9", "Test value, usability, and feasibility before expensive delivery choices become difficult to reverse.", ["Value propositions and experiment design", "Wireframes and interactive prototypes", "Usability testing and learning criteria", "Risk-based testing and iteration"], "Prototype, validation plan, and evidence-based recommendation."),
            ("04", "Product Planning and Agile Delivery", "FT weeks 7-8 | PT weeks 10-12", "Connect product outcomes to a roadmap and backlog that a delivery team can understand and challenge.", ["Outcome-based roadmaps", "Backlog structure and prioritization", "User stories and acceptance criteria", "Scrum, Kanban, and product rhythms"], "Outcome roadmap, prioritized backlog, and release hypothesis."),
            ("05", "Product Analytics and Economics", "FT weeks 9-10 | PT weeks 13-15", "Use product data and economic logic to decide whether to improve, scale, or stop.", ["Metric trees and product signals", "Funnels, cohorts, and experiments", "Business cases and unit economics", "Benefits tracking and decision thresholds"], "Metric tree, analytics specification, and product business case."),
            ("06", "Technical Product Practice", "FT week 11 | PT weeks 16-18", "Build enough technical fluency to make credible decisions with engineering, data, and security.", ["APIs, systems, and integrations", "Data flows, quality, and ownership", "Security, privacy, and responsible AI", "AI lifecycle and evaluation"], "Technical product brief, data-flow map, and AI evaluation plan."),
            ("07", "Go-to-Market, Launch and Growth", "FT weeks 12-13 | PT weeks 19-20", "Prepare the organization and market for adoption rather than only a release date.", ["Positioning and target segments", "Launch strategy and readiness", "Adoption and retention loops", "Growth experiments and responsible messaging"], "Go-to-market plan, launch checklist, and adoption dashboard."),
            ("08", "Product Leadership and Final Case", "FT week 14 | PT weeks 21-22", "Lead product decisions across boundaries and present a defensible end-to-end product case.", ["Leadership without authority", "Product reviews and decision forums", "Negotiation and executive communication", "Portfolio case and career transfer"], "Final product case, executive review, and portfolio story."),
        ],
        "capstone": "Design a credible AI-assisted B2B workflow product. Build the opportunity brief, research evidence, prototype, roadmap, metrics, technical brief, launch plan, and executive product case as one connected portfolio artifact.",
        "roles": ["Associate Product Manager", "Product Manager", "Technical Product Manager", "Product Operations", "Product Owner in a product organization"],
        "cohorts": ["18 Jan 2027 - Full-time - 14 weeks", "15 Feb 2027 - Part-time - 22 weeks", "12 Apr 2027 - Full-time - 14 weeks"],
    },
    {
        "filename": "the-best-school-digital-transformation-with-ai-curriculum-en-2026-08-31.pdf",
        "title": "Digital Transformation with AI",
        "category": "DIGITAL TRANSFORMATION",
        "accent": PURPLE,
        "duration": "16 weeks full-time | 24 weeks part-time",
        "lead": "Learn to connect strategy, operating model, governance, change, data, AI readiness, and program delivery in one credible transformation approach.",
        "positioning": "A transformation changes capabilities, decisions, processes, technology, and behavior across an organization. This course moves beyond a single project and teaches how to shape a portfolio, govern investment, build readiness, and realize benefits.",
        "outcomes": [
            "Assess transformation pressure, organizational maturity, and change readiness.",
            "Shape a portfolio of opportunities and investment cases under uncertainty.",
            "Design operating-model choices, governance, and clear decision rights.",
            "Evaluate data and AI readiness with responsible adoption controls.",
            "Build capability, sponsorship, communication, and feedback into the change.",
            "Redesign processes and governed human-in-the-loop workflows.",
            "Coordinate workstreams, benefits, and an executive transformation narrative.",
        ],
        "phases": [
            ("01", "Transformation Context and Change Readiness", "FT weeks 1-2 | PT weeks 1-3", "Analyze why change is needed, how ready the organization is, and where transformation pressure originates.", ["Digital and AI transformation patterns", "External drivers and internal constraints", "Capability and maturity assessment", "Stakeholder landscape and guardrails"], "Transformation context brief and readiness assessment."),
            ("02", "Opportunity Portfolio and Business Cases", "FT weeks 3-4 | PT weeks 4-6", "Identify, compare, and sequence opportunities by value, feasibility, risk, and strategic fit.", ["Opportunity discovery and value streams", "Use-case assessment and portfolios", "Benefits, costs, and investment logic", "Pilots, experiments, and funding stages"], "Prioritized transformation portfolio and investment case."),
            ("03", "Operating Model, Governance and Decision Rights", "FT weeks 5-6 | PT weeks 7-9", "Design the connection between strategy, delivery, risk, and operational ownership.", ["Operating-model choices", "Governance forums and decision rights", "Portfolio, program, and product interfaces", "Vendor and partner governance"], "Target operating model, governance map, and decision-rights matrix."),
            ("04", "Data, AI Readiness and Responsible Adoption", "FT weeks 7-8 | PT weeks 10-12", "Create data, risk, and responsible-use foundations for credible AI transformation.", ["Data quality, access, and ownership", "AI use-case lifecycle and evaluation", "Privacy, security, and regulation", "Human oversight and automation boundaries"], "AI readiness assessment, control map, and adoption standard."),
            ("05", "Change Leadership and Capability Building", "FT weeks 9-10 | PT weeks 13-15", "Prepare leaders, teams, and affected people for new decisions, processes, and responsibilities.", ["Change narratives and sponsor alignment", "Participation, resistance, and feedback", "Capability academies and role transitions", "Psychological safety and experiments"], "Change strategy, capability plan, and sponsor narrative."),
            ("06", "Process, Platform and Workflow Transformation", "FT weeks 11-12 | PT weeks 16-18", "Redesign work across process, platforms, and automation with measurable operational outcomes.", ["Process discovery and service blueprints", "Platform and integration choices", "Human-in-the-loop workflows", "Operational metrics and controls"], "Future-state service blueprint and governed automation prototype."),
            ("07", "Program Delivery, Scaling and Benefits", "FT weeks 13-14 | PT weeks 19-21", "Coordinate a transformation portfolio across workstreams, dependencies, releases, and benefit owners.", ["Program roadmaps and increments", "Cross-team dependencies", "Risk, assurance, and reporting", "Benefits realization and course correction"], "Integrated roadmap, benefits register, and executive dashboard."),
            ("08", "Enterprise Capstone and Executive Narrative", "FT weeks 15-16 | PT weeks 22-24", "Connect strategy, governance, delivery, and change in a defensible transformation proposal.", ["Enterprise transformation case", "Executive decision preparation", "Board-level risk and investment story", "Implementation sequence and first 100 days"], "Enterprise strategy, executive presentation, and first-100-days plan."),
        ],
        "capstone": "Shape an enterprise AI-enabled service transformation. Create the readiness assessment, portfolio, business case, operating model, AI control map, change strategy, service blueprint, roadmap, benefits register, and first-100-days plan.",
        "roles": ["Digital Transformation Manager", "Transformation Office Analyst", "Change and Adoption Lead", "Business Transformation Consultant", "AI Transformation Program Lead"],
        "cohorts": ["8 Feb 2027 - Full-time - 16 weeks", "8 Mar 2027 - Part-time - 24 weeks", "3 May 2027 - Full-time - 16 weeks"],
    },
]


def paragraph(c, text, x, y, width, style, max_height=200 * mm):
    item = Paragraph(text, style)
    item_width, item_height = item.wrap(width, max_height)
    item.drawOn(c, x, y - item_height)
    return y - item_height


def styles(accent):
    return {
        "title": ParagraphStyle("title", fontName="Helvetica-Bold", fontSize=31, leading=34, textColor=white, spaceAfter=0),
        "lead": ParagraphStyle("lead", fontName="Helvetica", fontSize=12.5, leading=18, textColor=HexColor("#DDE6F8")),
        "h1": ParagraphStyle("h1", fontName="Helvetica-Bold", fontSize=25, leading=29, textColor=NAVY),
        "h2": ParagraphStyle("h2", fontName="Helvetica-Bold", fontSize=16, leading=20, textColor=NAVY),
        "h3": ParagraphStyle("h3", fontName="Helvetica-Bold", fontSize=12.5, leading=15, textColor=NAVY),
        "body": ParagraphStyle("body", fontName="Helvetica", fontSize=9.5, leading=14, textColor=INK),
        "small": ParagraphStyle("small", fontName="Helvetica", fontSize=8, leading=11, textColor=MUTED),
        "bullet": ParagraphStyle("bullet", fontName="Helvetica", fontSize=9, leading=13, leftIndent=11, firstLineIndent=-9, textColor=INK),
        "phase": ParagraphStyle("phase", fontName="Helvetica-Bold", fontSize=8.5, leading=11, textColor=accent),
    }


def footer(c, number):
    c.setStrokeColor(BORDER)
    c.line(LEFT, 14 * mm, RIGHT, 14 * mm)
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 7.5)
    c.drawString(LEFT, 9 * mm, "THE BEST SCHOOL  |  PRACTICAL EDUCATION FOR CHANGING WORK")
    c.drawRightString(RIGHT, 9 * mm, f"{number:02d}")


def page_header(c, course, label, page):
    c.setFillColor(NAVY)
    c.rect(0, PAGE_H - 24 * mm, PAGE_W, 24 * mm, fill=1, stroke=0)
    c.setFillColor(course["accent"])
    c.rect(0, PAGE_H - 24 * mm, 6 * mm, 24 * mm, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 8)
    c.drawString(LEFT, PAGE_H - 14 * mm, label.upper())
    c.setFont("Helvetica", 7.5)
    c.drawRightString(RIGHT, PAGE_H - 14 * mm, course["title"])
    footer(c, page)


def card(c, x, top, width, height, fill=white):
    c.setFillColor(fill)
    c.setStrokeColor(BORDER)
    c.roundRect(x, top - height, width, height, 3 * mm, fill=1, stroke=1)


def build(course):
    path = OUTPUT / course["filename"]
    c = canvas.Canvas(str(path), pagesize=A4, pageCompression=1)
    c.setTitle(f"{course['title']} - Curriculum")
    c.setAuthor("The Best School")
    style = styles(course["accent"])

    c.setFillColor(NAVY)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    c.setFillColor(course["accent"])
    c.rect(0, PAGE_H - 11 * mm, PAGE_W, 11 * mm, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 9)
    c.drawString(LEFT, PAGE_H - 31 * mm, "THE BEST SCHOOL")
    c.setFillColor(course["accent"])
    c.setFont("Helvetica-Bold", 9)
    c.drawString(LEFT, PAGE_H - 67 * mm, course["category"])
    y = paragraph(c, course["title"], LEFT, PAGE_H - 79 * mm, 158 * mm, style["title"])
    y = paragraph(c, course["lead"], LEFT, y - 14 * mm, 145 * mm, style["lead"])
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 11)
    c.drawString(LEFT, y - 19 * mm, course["duration"])
    c.setFont("Helvetica", 9)
    c.setFillColor(HexColor("#DDE6F8"))
    c.drawString(LEFT, y - 28 * mm, "Remote | Teaching in English | Up to 10 learners")
    c.setFillColor(course["accent"])
    c.rect(LEFT, 29 * mm, 42 * mm, 2 * mm, fill=1, stroke=0)
    c.setFillColor(white)
    c.setFont("Helvetica", 8)
    c.drawString(LEFT, 20 * mm, "CURRICULUM  |  AUGUST 2026")
    c.showPage()

    page_header(c, course, "Program at a glance", 2)
    y = PAGE_H - 40 * mm
    y = paragraph(c, "A practical path from context to evidence", LEFT, y, 165 * mm, style["h1"])
    y = paragraph(c, course["positioning"], LEFT, y - 6 * mm, 165 * mm, style["body"])
    y -= 11 * mm
    paragraph(c, "WHAT YOU WILL BE ABLE TO DO", LEFT, y, 165 * mm, style["phase"])
    y -= 8 * mm
    for index, outcome in enumerate(course["outcomes"], 1):
        c.setFillColor(course["accent"])
        c.circle(LEFT + 4 * mm, y - 2 * mm, 3.7 * mm, fill=1, stroke=0)
        c.setFillColor(white)
        c.setFont("Helvetica-Bold", 7)
        c.drawCentredString(LEFT + 4 * mm, y - 3.1 * mm, f"{index:02d}")
        y = paragraph(c, outcome, LEFT + 12 * mm, y + 1 * mm, 151 * mm, style["body"]) - 5 * mm
    c.setFillColor(PAPER)
    c.roundRect(LEFT, 28 * mm, 170 * mm, 25 * mm, 3 * mm, fill=1, stroke=0)
    paragraph(c, "LEARNING MODEL", LEFT + 6 * mm, 48 * mm, 45 * mm, style["phase"])
    paragraph(c, "Live instruction, guided workshops, individual practice, team simulations, invited practitioners, and one continuous capstone.", LEFT + 46 * mm, 49 * mm, 116 * mm, style["small"])
    c.showPage()

    for pair_index in range(4):
        page_number = 3 + pair_index
        page_header(c, course, f"Curriculum phases {pair_index * 2 + 1}-{pair_index * 2 + 2}", page_number)
        y = PAGE_H - 38 * mm
        for phase in course["phases"][pair_index * 2:pair_index * 2 + 2]:
            number, title, pace, summary, topics, output = phase
            block_height = 102 * mm
            card(c, LEFT, y, 170 * mm, block_height, PAPER)
            c.setFillColor(course["accent"])
            c.circle(LEFT + 11 * mm, y - 13 * mm, 6 * mm, fill=1, stroke=0)
            c.setFillColor(white)
            c.setFont("Helvetica-Bold", 9)
            c.drawCentredString(LEFT + 11 * mm, y - 15 * mm, number)
            paragraph(c, title, LEFT + 22 * mm, y - 8 * mm, 140 * mm, style["h2"])
            paragraph(c, pace, LEFT + 22 * mm, y - 24 * mm, 140 * mm, style["phase"])
            paragraph(c, summary, LEFT + 8 * mm, y - 40 * mm, 154 * mm, style["body"])
            topic_y = y - 62 * mm
            for topic in topics:
                topic_y = paragraph(c, f"- {topic}", LEFT + 9 * mm, topic_y, 93 * mm, style["bullet"]) - 1.5 * mm
            c.setFillColor(white)
            c.setStrokeColor(BORDER)
            c.roundRect(LEFT + 108 * mm, y - 91 * mm, 54 * mm, 37 * mm, 2 * mm, fill=1, stroke=1)
            paragraph(c, "PRACTICAL OUTPUT", LEFT + 113 * mm, y - 60 * mm, 44 * mm, style["phase"])
            paragraph(c, output, LEFT + 113 * mm, y - 69 * mm, 44 * mm, style["small"])
            y -= 111 * mm
        c.showPage()

    page_header(c, course, "Capstone and career transfer", 7)
    y = PAGE_H - 41 * mm
    y = paragraph(c, "One connected case, built across the course", LEFT, y, 165 * mm, style["h1"])
    y = paragraph(c, course["capstone"], LEFT, y - 7 * mm, 165 * mm, style["body"])
    y -= 15 * mm
    paragraph(c, "PORTFOLIO EVIDENCE", LEFT, y, 165 * mm, style["phase"])
    y -= 10 * mm
    for phase in course["phases"]:
        card(c, LEFT, y, 170 * mm, 13 * mm, white)
        c.setFillColor(course["accent"])
        c.setFont("Helvetica-Bold", 8)
        c.drawString(LEFT + 6 * mm, y - 8.5 * mm, phase[0])
        paragraph(c, phase[5], LEFT + 18 * mm, y - 4 * mm, 144 * mm, style["small"])
        y -= 15 * mm
    y -= 4 * mm
    paragraph(c, "CAREER DIRECTIONS", LEFT, y, 165 * mm, style["phase"])
    y -= 8 * mm
    role_top = y
    for index, role in enumerate(course["roles"]):
        column = index % 2
        row = index // 2
        role_x = LEFT + column * 84 * mm
        role_y = role_top - row * 12 * mm
        width = 78 * mm
        c.setFillColor(PAPER)
        c.roundRect(role_x, role_y - 7 * mm, width, 9 * mm, 4.5 * mm, fill=1, stroke=0)
        c.setFillColor(INK)
        c.setFont("Helvetica-Bold", 8)
        c.drawString(role_x + 5 * mm, role_y - 4 * mm, role)
    c.showPage()

    page_header(c, course, "Schedule and next steps", 8)
    y = PAGE_H - 42 * mm
    y = paragraph(c, "Choose a learning rhythm", LEFT, y, 165 * mm, style["h1"])
    y = paragraph(c, "The content and capstone are shared across both tracks. Only pacing and weekly learning rhythm differ. All dates are provisional.", LEFT, y - 6 * mm, 165 * mm, style["body"])
    y -= 15 * mm
    for cohort in course["cohorts"]:
        card(c, LEFT, y, 170 * mm, 25 * mm, PAPER)
        c.setFillColor(course["accent"])
        c.rect(LEFT, y - 25 * mm, 3 * mm, 25 * mm, fill=1, stroke=0)
        paragraph(c, cohort, LEFT + 9 * mm, y - 8 * mm, 150 * mm, style["h3"])
        paragraph(c, "Remote | English | Up to 10 learners", LEFT + 9 * mm, y - 17 * mm, 150 * mm, style["small"])
        y -= 32 * mm
    y -= 5 * mm
    paragraph(c, "IMPORTANT NOTES", LEFT, y, 165 * mm, style["phase"])
    y -= 9 * mm
    notes = [
        "Exact live-session times are confirmed before each cohort.",
        "AI tools are used as assistants. Evidence, privacy, security, and human accountability remain part of every decision.",
        "The Best School certificate confirms completion of this curriculum and its practical requirements. It is not an external professional credential.",
        "Course content may be updated to reflect changing practice while the published learning outcomes remain stable.",
    ]
    for note in notes:
        y = paragraph(c, f"- {note}", LEFT + 2 * mm, y, 163 * mm, style["bullet"]) - 4 * mm
    c.setFillColor(NAVY)
    c.roundRect(LEFT, 27 * mm, 170 * mm, 31 * mm, 3 * mm, fill=1, stroke=0)
    paragraph(c, "READY TO DISCUSS YOUR FIT?", LEFT + 8 * mm, 51 * mm, 150 * mm, ParagraphStyle("cta", parent=style["phase"], textColor=course["accent"]))
    paragraph(c, "Visit kongor-co.github.io/course-test-website/en/ to compare courses, review dates, and start a short application.", LEFT + 8 * mm, 42 * mm, 150 * mm, ParagraphStyle("cta-body", parent=style["small"], textColor=white))
    c.showPage()

    c.save()
    return path


if __name__ == "__main__":
    for course_data in COURSES:
        print(build(course_data))
